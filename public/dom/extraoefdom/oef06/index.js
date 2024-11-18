/*Voeg een knop toe. Wanneer je op de knop klikt, moet de tekst van de knop veranderen naar “Geklikt!”.*/

const btn = document.getElementById("btn")

btn.addEventListener("click", function (){
    btn.defaultValue = "Geklikt!!";
})
