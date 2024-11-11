/*Voeg een mouseout event toe aan een p-element dat bedankt voor je bezoek in de console logt wanneer de muis wordt weggehaald*/

const ptag = document.getElementById("ptag");

ptag.addEventListener("mouseout", function (){
    return console.log("Bedankt voor je bezoek");
})
