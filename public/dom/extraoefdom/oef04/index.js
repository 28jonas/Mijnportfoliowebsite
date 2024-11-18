/*Voeg een invoerveld, een knop, en een lege paragraaf toe.
Wanneer je op de knop klikt, moet de tekst uit het invoerveld worden
weergegeven in de paragraaf.*/

const btn = document.getElementById("button-addon2");
const input = document.getElementById("input")
const p = document.getElementById("p")

btn.addEventListener("click", function (){
  p.innerHTML = input.value;
})
