package page

type Page struct {
	Url     string
	Content []byte
}

type Pages map[string]Page
