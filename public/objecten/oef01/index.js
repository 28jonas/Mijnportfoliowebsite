/*let persoon = "Tom" => variabele*/

let persoon = {
    naam : "Jonas",
    leeftijd : "22",
    beroep : "Full stack Developer"
}

Object.seal(persoon) /*Je kan niks verwijderen, wel veranderen*/
console.log(typeof(persoon))

/*creeren en wijzigen van een object*/
persoon.naam = "Tim";
console.log(persoon)

/*Deleten uit een object*/
delete persoon.beroep;
console.log(persoon);

/*Properties ophalen*/
console.log(Object.keys(persoon))

/*Properties tonen op scherm*/
console.log(persoon["naam"])
console.log(persoon["0"]) /*Dit gaat niet = undefined*/

/*values ophalen*/
console.log(Object.values(persoon));

/*Subarray*/
console.log(Object.entries(persoon))

/*Ik wil weten of dit een eigenschap is van een persoon*/
console.log(persoon.hasOwnProperty("naam"))
console.log(persoon.hasOwnProperty("kleurogen"))

function Persoon(naam, leeftijd){
    this.naam = naam;
    this.leeftijd = leeftijd;

}

let Amine = new Persoon("Amine", 30);
let Jonas = new Persoon("Jonas", 22)

/*let su = new persoon()
let fabio = new persoon()*/
