/*Schrijf een functie factorial(n) die het faculteit van n berekent. Het faculteit van een getal n is het product van alle positieve gehele getallen kleiner dan of gelijk aan n*/

function factorial(n) {
    let getal = 1;
    for(let i = 1; i<=n; i++){
        getal= getal * i;
    }
    return getal;
}

console.log(factorial("5"))