package ssg

import (
	"bytes"
	"context"
	"embed"
	"fmt"
	"os"
	"strings"

	"github.com/tdewolff/minify/v2"
	"github.com/tdewolff/minify/v2/html"
	"justinac0.github.io/internal/md"
	"justinac0.github.io/internal/types"
	"justinac0.github.io/templates"
)

func recursiveCachePage(mount embed.FS, absoluteBaseUrl string, baseDirUrl string, pages types.Pages, styles types.Styles) {
	dir, err := mount.ReadDir(baseDirUrl)
	if err != nil {
		panic(err)
	}

	for _, item := range dir {
		if item.IsDir() {
			recursiveCachePage(mount, absoluteBaseUrl, fmt.Sprintf("%s/%s", baseDirUrl, item.Name()), pages, styles)
		} else {
			MD_EXT := ".md"
			CSS_EXT := ".css"

			name := item.Name()
			fullUrl := fmt.Sprintf("%s/%s", baseDirUrl, name)

			if strings.Contains(item.Name(), MD_EXT) {
				var p types.Page

				start := len(absoluteBaseUrl)     // skip the absolute base url
				end := len(fullUrl) - len(MD_EXT) // ignore the md ext.
				relUrl := fullUrl[start:end]

				md.ToHTML(mount, fullUrl, &p)

				if strings.Compare(relUrl, "/index") != 0 {
					p.Url = relUrl[1:]
				} else {
					p.Url = ""
				}

				pages[p.Url] = p
			}

			if strings.Contains(item.Name(), CSS_EXT) {
				var s types.Style

				start := len(absoluteBaseUrl)      // skip the absolute base url
				end := len(fullUrl) - len(CSS_EXT) // ignore the md ext.
				relUrl := fullUrl[start:end]

				s.Url = relUrl[1:]
				styles[s.Url] = s
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

	// NOTE: minify html
	m := minify.New()
	m.Add("text/html", &html.Minifier{
		KeepDocumentTags: false,
		KeepQuotes:       false,
	})

	var out bytes.Buffer
	err := m.Minify("text/html", &out, bytes.NewReader(buf.Bytes()))
	if err != nil {
		panic(err)
	}

	err = os.WriteFile(path, out.Bytes(), 0777)
	if err != nil {
		panic(err)
	}
}

func GenFromEmbedFS(mount embed.FS, base string) {
	var pages types.Pages = make(types.Pages)
	var styles types.Styles = make(types.Styles)

	recursiveCachePage(mount, base, base, pages, styles)

	// TODO(justin): import from elsewhere
	var portfolio []types.Portfolio
	portfolio = append(portfolio, types.Portfolio{
		ImageUrl:  "./static/img/golang-gowv.png",
		Title:     "Extended WebView Bindings/Wrapper for Golang (gowv)",
		About:     "<span><b>gowv</b> is a <a style='z-index: 5;' target='_blank' href='https://github.com/webview/webview'>WebView</a> wrapper I wrote to fix some issues I had with the existing WebView Go bindings.</span>",
		MdUrl:     "./portfolio/gowv.html",
		GithubUrl: "https://github.com/justinac0/gowv",
	})
	portfolio = append(portfolio, types.Portfolio{
		ImageUrl:  "./static/img/collagen.gif",
		MdUrl:     "./portfolio/diffuse.html",
		Title:     "Physics Capstone",
		About:     "For my final year physics capstone I developed a Monte Carlo simulation of water diffision in articular cartilage. Data collected from these simulations can give insight into the morphology of cartilage fibers. The main simulation was written in python and real-time visualisations where written in C.",
		GithubUrl: "https://github.com/justinac0/BulkWaterDiffuse",
	})
	portfolio = append(portfolio, types.Portfolio{
		ImageUrl:  "./static/img/hackathon.png",
		MdUrl:     "./portfolio/hook-line-sinker.html",
		Title:     "Hackathon Educational Game",
		About:     "<span>Hook Line Sinker is a retro fishing game with a focus on education, a retro re-imagining of a gamified future of education. Built for the <a style='z-index: 5;' target='_blank' href='https://www.codenetwork.co/'>2025 Code Network Hackathon</a></span>",
		GithubUrl: "https://github.com/justinac0/HookLineSinker",
	})
	portfolio = append(portfolio, types.Portfolio{
		ImageUrl:  "./static/img/ascii.png",
		Title:     "Ascii Art Generator",
		About:     "Simple image processing tool for turning images into ascii art (python).",
		GithubUrl: "https://github.com/justinac0/image-ascii",
	})

	os.RemoveAll("./dist")
	for _, p := range pages {
		writeStaticFiles(p, pages, portfolio)
	}

	// NOTE: copy static files
	os.CopyFS("dist/static", os.DirFS("cmd/app/assets/static"))
}
