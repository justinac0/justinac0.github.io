package page

type PageMeta struct {
	Title  string `yaml:title`
	Author string `yaml:author`
	Date   string `yaml:date`
}

type Page struct {
	Meta PageMeta
	Url  string
	HTML string
}

type Pages map[string]Page
