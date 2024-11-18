/*Schrijf een functie telWoorden(zin) die het aantal woorden in een zin telt en het resultaat retourneert*/

function telWoorden(zin) {
    let woorden = zin.trim().split(/\s+/);
    return woorden.length;

}

console.log(telWoorden("Hallo ik ben jonas"))
