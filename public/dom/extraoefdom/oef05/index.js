/*Voeg een invoerveld, een knop, en een lege paragraaf toe. Wanneer je op de knop klikt, moet de tekst uit het invoerveld worden weergegeven in de paragraaf.*/

const btn = document.getElementById("button-addon2");
const input = document.getElementById("input")


btn.addEventListener("click", function (){
  let nieuweParagraaf = document.createElement("p");
  nieuweParagraaf.innerHTML = input.value;
  document.getElementById("ul").appendChild(nieuweParagraaf)
})
