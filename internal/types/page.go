package types

import "strings"

// TODO(justin): rename to blog***
type PageMeta struct {
	Title  string `yaml:title`
	Author string `yaml:author`
	Draft  bool   `yaml:draft`
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

func HasBlogs(pages Pages) bool {
	for _, p := range pages {
		if p.Meta.Draft == false && strings.Contains(p.Url, "blogs") {
			return true
		}
	}

	return false
}
