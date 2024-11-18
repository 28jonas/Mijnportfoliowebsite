/*Schrijf een functie keerOm(tekst) die een string omkeert en de omgekeerde string retourneert*/

function keerOm(tekst) {
   return tekst.split("").reverse().join("");
}

console.log(keerOm("javascript"))


