package main

import (
	"embed"
	"log/slog"

	"github.com/labstack/echo/v5"
	"github.com/labstack/echo/v5/middleware"
	"justinac0.github.io/internal/ssg"
)

//go:embed public
var public embed.FS

func main() {
	e := echo.New()
	e.StaticFS("/static", echo.MustSubFS(public, "public/static"))
	e.Use(middleware.Recover())

	BASE_DIR := "public/pages"
	ssg.GenFromEmbedFS(public, BASE_DIR, e)

	if err := e.Start(":3000"); err != nil {
		slog.Error("failed to start server", "error", err)
	}
}
