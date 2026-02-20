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
	"justinac0.github.io/internal"
	"justinac0.github.io/internal/page"
	"justinac0.github.io/templates"
)

// NOTE: static site generation

func mdToHTML(mount embed.FS, filePath string) []byte {
	file, err := mount.ReadFile(filePath)
	if err != nil {
		panic(err)
	}

	extensions := parser.CommonExtensions | parser.AutoHeadingIDs | parser.NoEmptyLineBeforeBlock
	p := parser.NewWithExtensions(extensions)
	doc := p.Parse(file)

	htmlFlags := html.CommonFlags | html.HrefTargetBlank
	opts := html.RendererOptions{Flags: htmlFlags}
	renderer := html.NewRenderer(opts)

	return markdown.Render(doc, renderer)
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

				p.Content = mdToHTML(mount, fullUrl)

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
				return internal.RenderTempl(c, http.StatusOK, templates.ArticlePage(p.Content))
			} else {
				return internal.RenderTempl(c, http.StatusOK, templates.HomePage(p.Content, pages))
			}
		})
	}
}
