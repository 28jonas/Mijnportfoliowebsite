/*Maak een knop en een lege paragraaf. Wanneer je op de knop klikt, moet de tekst “Hallo Wereld!” in de paragraaf worden weergegeven*/

const btn = document.getElementById("btn")
const p = document.getElementById("p")

btn.addEventListener("click", function (){
    p.innerHTML = "Hallo wereld";
})
