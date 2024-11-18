/*Voeg een mouseout event toe aan een p-element dat bedankt voor je bezoek in de console logt wanneer de muis wordt weggehaald*/

const input = document.getElementById("input");

input.addEventListener("focus", function (){
    return console.log("Invoerveld gefocust");
})

input.addEventListener("blur", function (){
    return console.log("invoerveld geblurd");
})