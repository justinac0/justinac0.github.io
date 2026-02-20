package internal

import (
	"github.com/a-h/templ"
	"github.com/labstack/echo/v5"
)

func RenderTempl(c *echo.Context, status int, t templ.Component) error {
	c.Response().WriteHeader(status)
	c.Response().Header().Set(echo.HeaderContentType, echo.MIMETextHTML)
	return t.Render(c.Request().Context(), c.Response())
}
