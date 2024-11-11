/*Schrijf een functie vervangKlinkers(tekst) die alle klinkers in een string vervangt door het teken * */

function vervangKlinker(tekst) {
    return tekst.replace(/[aeiou]/gi, "*");
}

console.log(vervangKlinker("Hallo wereld"));





