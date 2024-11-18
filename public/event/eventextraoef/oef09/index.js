/*Voeg een mouseout event toe aan een p-element dat bedankt voor je bezoek in de console logt wanneer de muis wordt weggehaald*/

const input = document.getElementById("input");
const btn = document.getElementById("button-addon2")

btn.addEventListener("click", function (){
    let text = input.value;
    return console.log(`${text}`);
})
