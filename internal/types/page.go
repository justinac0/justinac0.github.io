package types

type PageMeta struct {
	Title  string `yaml:title`
	Author string `yaml:author`
	Slug   string `yaml:slug`
	Date   string `yaml:date`
}

type Page struct {
	Meta PageMeta
	Url  string
	HTML string
}

type Style struct {
	Url string
	Css string
}

type Styles map[string]Style
type Pages map[string]Page

