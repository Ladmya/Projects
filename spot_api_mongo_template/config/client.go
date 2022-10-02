package config

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// ADD MONGODB ATLAS USERNAME & PASSWORD BELOW
const mongoURI = "mongodb+srv://<username>:<paswword>@cluster.sknwdwl.mongodb.net/?retryWrites=true&w=majority"
const dbName = "surfSpots"
const collectionName = "spots"

var Collection *mongo.Collection

// CONNECTION TO MONGODB
func init() {
	// Create client option
	clientOption := options.Client().ApplyURI(mongoURI)

	// Connect to MongoDB
	// Context : cadre pour les connections hors locales
	// TODO : when don't know which context to use
	client, err := mongo.Connect(context.TODO(), clientOption)

	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Finally connected to MongoDB!!!")

	Collection = client.Database(dbName).Collection(collectionName)

	// collection instance
	fmt.Println("Collection instance is ready")
}
