package model

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type SpotCollection struct {
	ID                   primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	BeenThere            bool               `json:"beenThere,omitempty" bson:"beenThere,omitempty"`
	Photos               string             `json:"photos,omitempty" bson:"photos,omitempty"`
	Surfbreak            string             `json:"surfbreak,omitempty" bson:"surfbreak,omitempty"`
	Address              string             `json:"address,omitempty" bson:"address,omitempty"`
	DifficultyLevel      int                `json:"difficultyLevel,omitempty" bson:"difficultyLevel,omitempty"`
	PeakSurfSeasonBegins string             `json:"peakSurfSeasonBegins,omitempty" bson:"peakSurfSeasonBegins,omitempty"`
	PeakSurfSeasonEnds   string             `json:"peakSurfSeasonEnds,omitempty" bson:"peakSurfSeasonEnds,omitempty"`
}
