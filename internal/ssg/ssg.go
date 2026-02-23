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

func writeStaticFiles(p types.Page, pages types.Pages, portfolio []types.Portfolio) {
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
		err := templates.HomePage(upDir, p, pages, portfolio).Render(context.Background(), &buf)
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

	var portfolio []types.Portfolio
	portfolio = append(portfolio, types.Portfolio{
		ImageUrl: "./static/img/collagen.gif",
		MdUrl:     "./portfolio/diffuse.html",
		Title:    "Physics Capstone",
		About:    "For my final year physics capstone I developed a Monte Carlo simulation of water diffision in articular cartilage. Data collected from these simulations can give insight into the morphology of cartilage fibers. The main simulation was written in python and real-time visualisations where written in C.",
		GithubUrl: "https://github.com/justinac0/BulkWaterDiffuse",
	})

	portfolio = append(portfolio, types.Portfolio{
		ImageUrl:  "./static/img/hackathon.png",
		MdUrl:     "./portfolio/hook-line-sinker.html",
		Title:     "Hackathon Educational Game",
		About:     "<span>Hook Line Sinker is a retro fishing game with a focus on education, a retro re-imagining of a gamified future of education. Built for the</span> <a href='https://www.codenetwork.co/'>2025 Code Network Hackathon</a>",
		GithubUrl: "https://github.com/justinac0/HookLineSinker",
	})
	portfolio = append(portfolio, types.Portfolio{
		ImageUrl: "./static/img/ascii.png",
		Title:    "Ascii Art Generator",
		About:    "Simple image processing tool for turning images into ascii art (python).",
		GithubUrl: "https://github.com/justinac0/image-ascii",
	})

	os.RemoveAll("./dist")
	for _, p := range pages {
		writeStaticFiles(p, pages, portfolio)
	}

	// NOTE: copy static files
	os.CopyFS("dist/static", os.DirFS("cmd/app/assets/static"))
}
