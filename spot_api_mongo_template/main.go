package main

import (
	"fmt"
	"log"
	"net/http"
	"spot_api_mongo/router"
)

func main() {
	fmt.Println("MongoDB API")
	rrrouter := router.Router()
	fmt.Println("Server is warming up...")
	log.Fatal(http.ListenAndServe(":4000", rrrouter))
	fmt.Println("Listening at port 4000 ...")
}
