package router

import (
	"spot_api_mongo/controller"

	"github.com/gorilla/mux"
)

//  NEED TO ADD GET ONE SPOT ROUTE

func Router() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/api/spot/{id}", controller.GetASpot).Methods("GET")
	router.HandleFunc("/api/spots", controller.GetAllSpots).Methods("GET")
	router.HandleFunc("/api/spot", controller.AddASpot).Methods("POST")
	router.HandleFunc("/api/spot/{id}", controller.SpotAlreadyVisited).Methods("PUT")
	router.HandleFunc("/api/spot/{id}", controller.DeleteASpot).Methods("DELETE")
	router.HandleFunc("/api/deleteallspots", controller.DeleteAllSpots).Methods("DELETE")

	return router
}
