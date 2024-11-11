/*Schrijf een functie isPrime(n) die controleert of een getal een priemgetal is. Retourneer true als het een priemgetal is, anders false*/

function isPrime(n) {
        if (n <= 1) return false; // Getallen kleiner dan of gelijk aan 1 zijn geen priemgetallen.
        if (n === 2) return true; // 2 is het enige even priemgetal.
        if (n % 2 === 0) return false; // Andere even getallen zijn geen priemgetallen.

        // Controleer delers vanaf 3 tot de wortel van n, alleen oneven getallen.
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false; // Als n deelbaar is door i, is het geen priemgetal.
        }
        return true; // Als er geen delers zijn gevonden, is het een priemgetal.
    }

    console.log(isPrime(7)); // true
    console.log(isPrime(10)); // false
    console.log(isPrime(17)); // true
