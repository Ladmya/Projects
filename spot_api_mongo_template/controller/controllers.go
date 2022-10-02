package controller

import (
	"encoding/json"
	"net/http"
	"spot_api_mongo/helper"
	"spot_api_mongo/model"

	"github.com/gorilla/mux"
)

// CONTROLLERS
//  NEED TO ADD GET ONE SPOT METHOD
// Uppercase starting functions
func GetAllSpots(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/x-www-form-urlencode")
	//Takes all kind of characters
	allSpots := helper.GetAllSpots()
	// Send a response
	json.NewEncoder(writer).Encode(allSpots)
}

func AddASpot(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/x-www-form-urlencode")
	// Allow content type
	writer.Header().Set("Allow-Control-Allow-Methods", "CREATE")

	var spot model.SpotCollection
	_ = json.NewDecoder(reader.Body).Decode(&spot)
	helper.AddASpot(spot)

	json.NewEncoder(writer).Encode(spot)
}

func SpotAlreadyVisited(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/x-www-form-urlencode")
	// Allow content type
	writer.Header().Set("Allow-Control-Allow-Methods", "PUT")

	params := mux.Vars(reader)
	helper.UpdateASpot(params["id"])
	json.NewEncoder(writer).Encode(params["id"])
}

func DeleteASpot(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/x-www-form-urlencode")
	// Allow content type
	writer.Header().Set("Allow-Control-Allow-Methods", "DELETE")

	params := mux.Vars(reader)
	helper.DeleteASpot(params["id"])
	json.NewEncoder(writer).Encode(params["id"])
}

func DeleteAllSpots(writer http.ResponseWriter, reader *http.Request) {
	writer.Header().Set("Content-Type", "application/x-www-form-urlencode")
	// Allow content type
	writer.Header().Set("Allow-Control-Allow-Methods", "DELETE")

	count := helper.DeleteAllSpots()
	json.NewEncoder(writer).Encode(count)
}
