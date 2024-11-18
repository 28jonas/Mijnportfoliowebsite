

/*let Auto = {
    Dit was het gene vroeger zie oef01
}*/
/*es6 2015*/
class Persoon{
    constructor(naam, voornaam, leeftijd, geboortedatum) {
        this.naam = naam;
        this.voornaam = voornaam;
        this._leeftijd = leeftijd;
        this.geboortedatum = geboortedatum;
    }

    get leeftijd(){
        return this._leeftijd;
    }

    set leeftijd(eenLeeftijd){
        if (eenLeeftijd > 0){
            this._leeftijd = eenLeeftijd
      }
    }

    /*functie/method*/
    beschrijf(){
        return `${this.naam} ${this.voornaam}, leeftijd: ${this._leeftijd}, Geboortejaar: ${this.geboortedatum}`;
    }
}

/*1 instatie van het object Persoon*/
/*
let persoon1 = new Persoon("Vandecasteele", "Jonas", 22, "2002-08-28")
*/

let aantal = parseInt(prompt("Hoeveel nieuwe personen wil je ingeven"));
let personen = [];

for(let i =0; i<aantal; i++){
    let naam = prompt(`Wat is de naam van persoon ${i+1}`);
    let voornaam = prompt(`Wat is de achternaam van persoon ${i+1}`);
    let leeftijd = prompt(`Wat is de leeftijd van persoon ${i+1}`);
    let geboortedatum = prompt(`Wat is het geboortejaar van persoon ${i+1}`);
    let persoon = new Persoon(naam, voornaam, leeftijd, geboortedatum);
    personen.push(persoon)
}

console.log(personen)

console.log("Beschrijving van de ingevoerde personen")
personen.forEach((persoon, index) =>{
    console.log(`Persoon ${index +1}: ${persoon.beschrijf()}`);
})

class Student extends Persoon{
    constructor(naam, voornaam, leeftijd, geboortedatum, studentNummer) {
            super(naam, voornaam, leeftijd, geboortedatum);/*oproepen constructor van Persoon*/
        this.studentNummer = studentNummer
    }

    beschrijf() {
        return `${super.beschrijf()} - ${this.studentNummer}`;
    }
}

nieuweStudent = new Student("Vandecasteele", "Jonas", 22, "2002", 3)
console.log(nieuweStudent.beschrijf())