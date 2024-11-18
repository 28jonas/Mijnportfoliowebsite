/*Maak een invoerveld en een knop. Wanneer je op de knop klikt, moet de tekst in het invoerveld worden gewist.*/

const btn = document.getElementById("button-addon2");
const input = document.getElementById("input")

btn.addEventListener("click", function (){
  input.value = "";
})

console.log(document.body.oninput)