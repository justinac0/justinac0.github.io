package ssg

import (
	"bytes"
	"context"
	"embed"
	"fmt"
	"os"
	"strings"

	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/html"
	"github.com/gomarkdown/markdown/parser"
	"go.yaml.in/yaml/v3"
	"justinac0.github.io/internal/types"
	"justinac0.github.io/templates"
)

// NOTE: static site generation
func parseFrontMatter(content []byte) (types.PageMeta, []byte, error) {
	var meta types.PageMeta

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

func mdToHTML(mount embed.FS, filePath string, p *types.Page) {
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

func recursiveCachePage(mount embed.FS, absoluteBaseUrl string, baseDirUrl string, pages types.Pages) {
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
				var p types.Page

				name := item.Name()
				fullUrl := fmt.Sprintf("%s/%s", baseDirUrl, name)

				start := len(absoluteBaseUrl)           // skip the absolute base url
				end := len(fullUrl) - len(MD_EXTENSION) // ignore the md ext.
				relUrl := fullUrl[start:end]

				mdToHTML(mount, fullUrl, &p)

				if strings.Compare(relUrl, "/index") != 0 {
					p.Url = relUrl[1:]
				} else {
					p.Url = ""
				}

				pages[p.Url] = p
			}
		}
	}
}

func writeStaticFiles(p types.Page, pages types.Pages, work []types.Portfolio) {
	BUILD_DIR := "dist/"

	// NOTE: file name resolution
	var path string = BUILD_DIR + p.Url
	var isIndex bool = false
	if strings.Compare(p.Url, "") == 0 {
		path += "index.html"
	} else {
		path += ".html"
		isIndex = true
	}

	dirs := strings.Split(path, "/")
	dirs = dirs[:len(dirs)-1]

	// NOTE: create dirs if not exists
	last := ""
	upDir := ""
	for i, d := range dirs {
		last += d + "/"
		if i > 0 {
			upDir += "../"
		}

		if _, err := os.Stat(last); os.IsNotExist(err) {
			err := os.Mkdir(last, 0777)
			if err != nil {
				panic(err)
			}
		}
	}

	// NOTE: write html
	var buf bytes.Buffer
	if isIndex == false {
		err := templates.HomePage(upDir, p, pages, work).Render(context.Background(), &buf)
		if err != nil {
			panic(err)
		}
	} else {
		err := templates.ArticlePage(upDir, p).Render(context.Background(), &buf)
		if err != nil {
			panic(err)
		}
	}

	err := os.WriteFile(path, buf.Bytes(), 0777)
	if err != nil {
		panic(err)
	}
}

func GenFromEmbedFS(mount embed.FS, base string) {
	var pages types.Pages = make(types.Pages)
	recursiveCachePage(mount, base, base, pages)

	var work []types.Portfolio
	work = append(work, types.Portfolio{
		ImageUrl: "./static/img/ascii.png",
		Title:    "Ascii Art Generator",
		About:    "Simple image processing tool for turning images into ascii art (python).",
	})
	work = append(work, types.Portfolio{
		ImageUrl: "./static/img/monte_carlo.png",
		Title:    "Physics Capstone (Monte Carlo)",
		About:    "3D simulation of water diffusion in articular cartilage (python).",
	})
	work = append(work, types.Portfolio{
		ImageUrl: "./static/img/monte_carlo.png",
		Title:    "Physics Capstone (Monte Carlo)",
		About:    "3D simulation of water diffusion in articular cartilage (python).",
	})
	work = append(work, types.Portfolio{
		ImageUrl: "./static/img/ascii.png",
		Title:    "Ascii Art Generator",
		About:    "Simple image processing tool for turning images into ascii art (python).",
	})
	work = append(work, types.Portfolio{
		ImageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F24ai.tech%2Fen%2Fwp-content%2Fuploads%2Fsites%2F3%2F2023%2F10%2F01_product_1_sdelat-kvadratnym-2-scaled.jpg&f=1&nofb=1&ipt=ba7b1e29f5405a4c31c3e9c0f8afe66f0b6a49b1b32672d8cfe95584eede45cb",
		Title:    "Fish",
		About:    "Cool fish",
	})
	work = append(work, types.Portfolio{
		ImageUrl: "./static/img/ascii.png",
		Title:    "Ascii Art Generator",
		About:    "Simple image processing tool for turning images into ascii art (python).",
	})
	work = append(work, types.Portfolio{
		ImageUrl:  "./static/img/hackathon.png",
		Title:     "Hackathon Educational Game",
		About:     "...",
		GithubUrl: "https://github.com/justinac0/HookLineSinker",
	})

	os.RemoveAll("./dist")
	for _, p := range pages {
		writeStaticFiles(p, pages, work)
	}

	// NOTE: copy static files
	os.CopyFS("dist/static", os.DirFS("cmd/app/assets/static"))
}
