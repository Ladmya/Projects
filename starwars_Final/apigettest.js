// import fetch from "https://cdn.skypack.dev/node-fetch";


// GOLDEN LOADER
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
     loader.classList.add("loader--hidden");
     loader.addEventListener("transitionend", () => {
          document.body.removeChild(loader);
          });
    });
    
      
// CHARACTERS

// Function : chooses a character randomly from the table 
function chooseRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)]; 
    };
      
// Function that removes space from the character name to create CLASS in CSS / ex: .LukeSkywalker
function removeSpace(str) {
    return str.replaceAll(" ", "").replaceAll("-", "")
    };
      
// Function that displays information about a single character
function displayCharacterInfo(character) {
// "Luke Skywalker 19BBY blue 172 male"
    const characterInfo = `<div class="${removeSpace(character.name)} character-text">
        <div>Name: ${character.name}</div>
        <div>Height: ${character.height} </div>
        <div>Gender: ${character.gender} </div>
        <div>Eye color: ${character.eye_color} </div>
        <div>Homeworld: ${character.homeworld}</div>
        <div class="character-image"></div>
           </div>`
document.getElementById("character-info").innerHTML = characterInfo
    };
      
// Function to define innerHTML for HTML table
function show(characterList) {
    let tab =
         `<tr>
            <th>Name</th>
            <th>Height</th>
            <th>Gender</th>
            <th>Eye Color</th>
            <th>Homeworld</th>                    
        </tr>`;
      
          // Loop to access all rows 
        for (let el of characterList) {
              tab += `<tr> 
          <td>${el.name} </td>
          <td>${el.height}</td>     
          <td>${el.gender}</td>         
          <td>${el.eye_color}</td>   
          <td>${el.homeworld}</td>
          </tr>`;
    }
// Setting innerHTML as tab variable
document.getElementById("name").innerHTML = tab;
    }; 
      
     
        
// FETCH DATA : CHARACTERS & HOMEWORLDS
// F(): fetches, parses, character info 1st Json
async function fetchStarWarsCharacters() {  
    // Storing response
    const response = await fetch('https://swapi.dev/api/people/?format=json');
    // Storing data in form of JSON
    const data = await response.json();
    //console.log(data.results);
        
    let character = chooseRandomElement(data.results);
    //console.log("CHARACTER",character);

// Ordre d'éxécution: 
// 1.fetchPlanet must be executed during the first fetch F()  
// 2.following the random choice of character  
// 3.before displaying the character

// Récupération et transformation de F() fetchPlanet en variable
    let myPlanet = await fetchPlanet(character.homeworld); //Permet également la récupération de l'url dans la 2e F() fetchPlanet
// Assignation d'une nouvelle valeur à "character.homeworld" pour l'affichage dans la card  
    character.homeworld=myPlanet;
    displayCharacterInfo(character);
        
    console.log(data.results);  // results : nom du tableau json "people"
    console.log("MP", myPlanet);   
    };

// F(): fetches, parses planet 2nd Json
async function fetchPlanet(url) {
    const pResponse = await fetch(url);
    console.log(url);
    const pData = await pResponse.json();
    console.log("PDATA",pData.name);  
      
    let planet = pData.name;
    console.log("LetP", planet);
    return planet; // "return" obligatoire pour stocker la valeur et pouvoir la réutiliser
    
document.getElementById("planet-name").innerHTML = planet 
    };
    
fetchStarWarsCharacters();  

      



