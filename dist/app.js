"use strict";
/*const url = "https://swapi.dev/api/starships";
const p = fetch(url);
p.then(Response => {
    return Response.json();
}).then(shareResults => {
    console.groupCollapsed(shareResults);
});
function logShips(ships) {
    console.log("Ships loaded", ships[0]);
}*/

const ctnSpaceShip = document.getElementById("ctn-main");
// Functions Starships
const starshipsPrevious = document.getElementById("starships-previous");
const starshipsNext = document.getElementById("starships-next");

let URL_Starships = "https://swapi.dev/api/starships/?page=1";
let nextStarships;
let previousStarships;

starshipsPrevious.addEventListener("click", pagePreviousStarships);
starshipsNext.addEventListener("click", pageNextStarships);

async function fetchStarships() {
document.querySelector('.overlay').classList.add('active');
    let results = await fetch(URL_Starships);
    const data = await results.json();
    nextStarships = data.next;
    previousStarships = data.previous;
    let starships = data.results;
    let outPut = ' ';
document.querySelector('.overlay').classList.remove('active');
    starships.forEach(item => {
        outPut += `<div class="card card-starships">
                    <h2>${item.name}</h2>
                    <h5>Model: ${item.model}</h5>
                    <h5>Manufacturer: ${item.manufacturer}</h5>
                    <h5>Cost in credits: ${item.cost_in_credits}</h5>
                    <h5>Length: ${item.length}</h5>
                    <h5>Max atmosphering speed: ${item.max_atmosphering_speed}</h5>
                    <h5>Crew: ${item.crew}</h5>
                    <h5>Passengers: ${item.passengers}</h5>
                    <h5>Cargo capacity: ${item.cargo_capacity}</h5>
                </div>`
    })
    ctnSpaceShip.innerHTML = outPut;
}
    
function pageNextStarships() {
    if(nextStarships) {
    URL_Starships = new URL(nextStarships);
    }
    fetchStarships()
    .then(response => { 
    console.log(`Success: Starships`);
    })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
    });
}
function pagePreviousStarships() {
    if(previousStarships) {
    URL_Starships = new URL(previousStarships);
    }
    fetchStarships()
    .then(response => { 
    console.log(`Success: Starships`);
    })
    .catch(error => { 
    console.log(`error!`)
    console.error(error) 
    });
}