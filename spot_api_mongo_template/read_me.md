### API - BACKEND SURF SPOT APPLICATION

**1 - DESCRIPTION**
I wanted to follow up on the second part of a group project, the first part consisted in building a front for an application that lists surf spots by fecthing data from an existing API, using React Native, TS, JS.
The second part of the project was using Golang to build an API, to create a database and to perform CRUD operations. As I didn't knew Golang, I decided to push further in the use of non familiar stack. I then chose non relational db with MONGODB with its driver and host it on AWS.

**REQUIREMENTS**

	•	Creation of a Database & API 
	•	Using at least 1 framework for HTTP
	•	Hosting Database on a cloud platform
	• CRUD  

**TECH STACK**

BACK : GOLANG // MONGODB // POSTMAN 
PACKAGES : GORILLA MUX // MONGODB DRIVER 
CLOUD : MONGODB ATLAS (AWS)

**CODING TOPICS** 

API // ROUTES BACK // DB CREATION // MONGODB CRUD 

**2 - INSTALLATION - LAUNCH THE WEBSITE**

INSTALL GOLANG LOCALLY
**!!! CREATE AN ACCOUNT ON MONGODB ATLAS AND SET UP A CLUSTER, THEN REPLACE THE URI IN CLIENT.GO IN "CONST MONGOURI" WITH YOUR OWN USERNAME & PASSWORD !!!**

COMMANDS:
go get go.mongodb.org/mongo-driver/mongo
go get -u github.com/gorilla/mux

SET UP COMMANDS:
go mod init spot_api_mongo 
go mod tidy (cleaning/updating go.mod)
go build main.go
go run main.go


// To import package path in a package : cmd + s

**3 - FUNCTIONALITIES**

 => CRUD         
 => Back architecture conception
 => DB creation (non-relational)
 => Server set up (using mongo-driver)
 => API creation // Testing with Postman  // DB connection
 => Controllers creation (MONGODB requests)

**Missing functionalities** : 
To connect with group project (front)

**4 - DIFFICULTIES & DISCOVERIES**

**WORK ORGANISATION** : 
- Golang courses to get familiar with the language (1 week)
- Researches on API & microservices architectures with MONGODB & GO
- 1 week to try another framework like Gin Gonic

**TECH WISE** :   
  - Architecture & system design
  - Discovery of Golang / Mongo-DB & HTTP PACKAGES
  - Deeper knowledge of an API with new languages
  - Code efficiency through types (space memory)


**5 - RESSOURCES:** 

DEMOLA MALOMO: https://dev.to/hackmamba/build-a-rest-api-with-golang-and-mongodb-gin-gonic-version-269m
IAN DUNCAN : https://medium.com/the-andela-way/build-a-restful-json-api-with-golang-85a83420c9da
RADHAKISHAN SURWASE : https://levelup.gitconnected.com/working-with-mongodb-using-golang-754ead0c10c


**Developer : Ladmya** 