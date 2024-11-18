/*Voeg een knop toe. Wanneer je op de knop klikt, moet de tekst van de knop veranderen naar “Geklikt!”.*/

const btn = document.getElementById("btn")
const p = document.getElementById("p")
let teller = 0;

btn.addEventListener("click", function (){
    teller = teller +1
    p.textContent = teller;
})
