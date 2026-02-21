package main

import (
	"embed"

	"justinac0.github.io/internal/ssg"
)

//go:embed assets
var public embed.FS

func main() {
	BASE_DIR := "assets/pages"
	ssg.GenFromEmbedFS(public, BASE_DIR)
}
