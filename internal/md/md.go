package md

import (
	"embed"
	"strings"

	"github.com/gomarkdown/markdown"
	"github.com/gomarkdown/markdown/html"
	"github.com/gomarkdown/markdown/parser"
	"go.yaml.in/yaml/v3"
	"justinac0.github.io/internal/types"
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

func ToHTML(mount embed.FS, filePath string, p *types.Page) {
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

