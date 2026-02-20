package ssg

import (
	"embed"
	"fmt"
	"net/http"
	"strings"

	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/html"
	"github.com/gomarkdown/markdown/parser"
	"github.com/labstack/echo/v5"
	"go.yaml.in/yaml/v3"
	"justinac0.github.io/internal"
	"justinac0.github.io/internal/page"
	"justinac0.github.io/templates"
)

// NOTE: static site generation

func parseFrontMatter(content []byte) (page.PageMeta, []byte, error) {
	var meta page.PageMeta

	str := string(content)

	if !strings.HasPrefix(str, "---") {
		return meta, content, nil
	}

	parts := strings.SplitN(str, "---", 3)
	if len(parts) < 3 {
		return meta, content, nil
	}

	err := yaml.Unmarshal([]byte(parts[1]), &meta)
	if err != nil {
		return meta, nil, err
	}

	body := []byte(parts[2])
	return meta, body, nil
}

func mdToHTML(mount embed.FS, filePath string, p *page.Page) {
	file, err := mount.ReadFile(filePath)
	if err != nil {
		panic(err)
	}

	meta, body, err := parseFrontMatter(file)
	if err != nil {
		panic(err)
	}

	extensions := parser.CommonExtensions | parser.AutoHeadingIDs | parser.NoEmptyLineBeforeBlock
	parse := parser.NewWithExtensions(extensions)
	doc := parse.Parse(body)

	htmlFlags := html.CommonFlags | html.HrefTargetBlank
	opts := html.RendererOptions{Flags: htmlFlags}
	renderer := html.NewRenderer(opts)

	p.HTML = string(markdown.Render(doc, renderer))
	p.Meta = meta
}

func recursiveCachePage(mount embed.FS, absoluteBaseUrl string, baseDirUrl string, pages page.Pages) {
	dir, err := mount.ReadDir(baseDirUrl)
	if err != nil {
		panic(err)
	}

	for _, item := range dir {
		if item.IsDir() {
			recursiveCachePage(mount, absoluteBaseUrl, fmt.Sprintf("%s/%s", baseDirUrl, item.Name()), pages)
		} else {
			MD_EXTENSION := ".md"
			if strings.Contains(item.Name(), MD_EXTENSION) {
				var p page.Page

				name := item.Name()
				fullUrl := fmt.Sprintf("%s/%s", baseDirUrl, name)

				start := len(absoluteBaseUrl)           // skip the absolute base url
				end := len(fullUrl) - len(MD_EXTENSION) // ignore the md ext.
				relUrl := fullUrl[start:end]

				mdToHTML(mount, fullUrl, &p)

				if strings.Compare(relUrl, "/index") != 0 {
					p.Url = relUrl[1:]
				} else {
					p.Url = "/"
				}

				pages[p.Url] = p
			}
		}
	}
}

func GenFromEmbedFS(mount embed.FS, base string, e *echo.Echo) {
	var pages page.Pages = make(page.Pages)
	recursiveCachePage(mount, base, base, pages)

	for _, p := range pages {
		e.GET(p.Url, func(c *echo.Context) error {
			if strings.Compare(p.Url, "/") != 0 {
				return internal.RenderTempl(c, http.StatusOK, templates.ArticlePage(p))
			} else {
				return internal.RenderTempl(c, http.StatusOK, templates.HomePage(p, pages))
			}
		})
	}
}
