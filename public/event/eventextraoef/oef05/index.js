/*Voeg een mouseout event toe aan een p-element dat bedankt voor je bezoek in de console logt wanneer de muis wordt weggehaald*/

const body = document.getElementById("body");

body.addEventListener("click", coordinaten)

function coordinaten(c){
    return console.log(`Klikpositie: ${c.screenX}, ${c.screenY}`)
}