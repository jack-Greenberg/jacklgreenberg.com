package main

//go:generate qtc -dir=templates

import (
	"./templates"
	"github.com/qiangxue/fasthttp-routing"
	"github.com/valyala/fasthttp"
	"log"
)

func main() {
	log.Printf("Starting the server at http://localhost:8080")

	router := routing.New()

	router.Get("/", func(c *routing.Context) error {
		p := &templates.MainPage{
			CTX: c,
		}
		templates.WritePageTemplate(c, p)
		c.SetContentType("text/html")

		return nil
	})

	panic(fasthttp.ListenAndServe(":8080", router.HandleRequest))
}
