/*Toon bericht bij mouseover. Voeg een mouseover event toe aan een tekst die "je beweegt over de tekst!" in de console log. Conole.log("je beweegt over de tekst") als output*/

const btn = document.getElementById("btn")

btn.addEventListener("mouseover", function (){
    return console.log("Je beweegt over de tekst!")
})

