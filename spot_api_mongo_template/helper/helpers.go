package helper

import (
	"context"
	"fmt"
	"log"
	"spot_api_mongo/config"
	"spot_api_mongo/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// GET ONE DOCUMENT
func GetASpot(spotId string) model.SpotCollection {
	result := model.SpotCollection{}
	id, _ := primitive.ObjectIDFromHex(spotId)
	filter := bson.M{"_id": id}
	err := config.Collection.FindOne(context.Background(), filter).Decode(&result)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Found a spot", result)
	return result
}

// GET ALL DOCUMENTS
func GetAllSpots() []primitive.M {
	cursor, err := config.Collection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}
	var spots []primitive.M

	for cursor.Next(context.Background()) {
		var spot bson.M
		err := cursor.Decode(&spot)
		if err != nil {
			log.Fatal(err)
		}
		spots = append(spots, spot)
	}
	defer cursor.Close(context.Background())
	return spots
}

// INSERT A DOCUMENT (a spot)
func AddASpot(spot model.SpotCollection) {
	added, err := config.Collection.InsertOne(context.Background(), spot)

	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Added one spot in db with ID", added.InsertedID)
}

// UPDATE A DOCUMENT
func UpdateASpot(spotId string) {
	id, _ := primitive.ObjectIDFromHex(spotId)
	// To filter : bson.M or .D or .A : depending on sorted elements
	filter := bson.M{"_id": id}
	update := bson.M{"$set": bson.M{"beenThere": false}}

	result, err := config.Collection.UpdateOne(context.Background(), filter, update)

	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Updated a spot, modified count: ", result.ModifiedCount)
}

// DELETE A DOCUMENT
func DeleteASpot(spotId string) {
	id, _ := primitive.ObjectIDFromHex(spotId)
	filter := bson.M{"_id": id}
	deleteCount, err := config.Collection.DeleteOne(context.Background(), filter)

	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Deleted a spot with delete count", deleteCount)
}

// DELETE ALL DOCUMENTS !!!!
func DeleteAllSpots() int64 {
	// Below {{}} : not passing values which means all documents will be selected
	filter := bson.D{{}}
	deleteAllCounts, err := config.Collection.DeleteMany(context.Background(), filter)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Deleted all spots, number of spots deleted: ", deleteAllCounts.DeletedCount)
	return deleteAllCounts.DeletedCount
	// OR without filter declaration : collection.DeleteMany(context.Background(), bson.D{{}},   )
}
