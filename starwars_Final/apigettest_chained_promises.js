import fetch from "https://cdn.skypack.dev/node-fetch";

// FETCH DATA : CHARACTERS & HOMEWORLDS
// F(): fetches, parses, character info 1st Json
/*
async function fetchStarWarsCharacters() {  
    // Storing response
    const response = await fetch('https://swapi.dev/api/people/?format=json');
    // Storing data in form of JSON
    const data = await response.json();
    //console.log(data.results);
        
    let character = chooseRandomElement(data.results);
    //console.log("CHARACTER",character);
// Ordre d'éxécution    
// Récupération et transformation de F() fetchPlanet
    let myPlanet = await fetchPlanet(character.homeworld); //Permet également la récupération de l'url dans la 2e F() fetchPlanet
// Assignation d'une nouvelle valeur à "character.homeworld" pour l'affichage dans la card  
    character.homeworld=myPlanet;
    displayCharacterInfo(character);
        
    console.log(data.results);  // results : nom du tableau json "people"
    console.log("MP", myPlanet);   
    };
    */

    function fetchCharacter() {
        return new Promise((resolve,reject)=> {
            fetch('https://swapi.dev/api/people/?format=json').then(response => {
                return response.json();
            }).then(characterData => {
                /* - Emulates an error message - */
                throw new Error("merde de merde");
                resolve(characterData);
            }).catch(err => {
                reject(err);
            });
        });
    }
    
    function fetchHomeworld(planet) {
        return new Promise((resolve,reject)=> {
            fetch('https://swapi.dev/api/planets/?format=json'+ +".json").then(response => {
                return response.json();
            }).then(planetData => {
                /* - Emulates an error message - */
                throw new Error("merde de merde");
                resolve(planetData);
            }).catch(err => {
                reject(err);
            });
        });
    }

    fetchCharacter().then (characterData =>{
       return fetchHomeworld(characterData.homeworld);
    }).then(planetData => { 
        console.log("Homeworld loaded");
        console.log(planetData);
    }).catch(err => {
        /* -Proves the emulation is working by displaying the message in the console-  */
        console.log('test');
        console.error(merde);
    });



  