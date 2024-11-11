/*Voeg een paragraaf met tekst en een knop toe. Wanneer je op de knop klikt, moet de paragraaf worden verborgen of weergegeven, afhankelijk van de huidige zichtbaarheid.*/

const switche = document.getElementById("flexSwitchCheckDefault")
const ul = document.getElementById("ul")

switche.addEventListener("change", function (){
    if (switche.checked){
        ul.classList.remove("collapse");
    } else{
        ul.classList.add("collapse");
    }
})
