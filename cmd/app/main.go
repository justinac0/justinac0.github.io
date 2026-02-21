package main

import (
	"context"
	"embed"
	"errors"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

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

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	s := http.Server{Addr: ":3000", Handler: e}
	go func() {
		fmt.Println("starting echo server")
		if err := s.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			e.Logger.Error("failed to start server", "error", err)
		}
	}()

	<-ctx.Done()

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	if err := s.Shutdown(ctx); err != nil {
		e.Logger.Error("failed to stop server", "error", err)
	}
}
