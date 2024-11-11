/*Schrijf een functie genereerWachtwoord(lengte) die een willekeurig wachtwoord van een opgegeven lengte genereert. Het wachtwoord moet uit hoofdletters, kleine letters, cijfers en speciale tekens bestaan*/

function genereerWachtwoord(length) {
    if (length < 4) {
        throw new Error("Length should be at least 4 to include all character types.");
    }

    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

    // Ensure each type of character is included
    let password = [
        lowerChars[Math.floor(Math.random() * lowerChars.length)],
        upperChars[Math.floor(Math.random() * upperChars.length)],
        numbers[Math.floor(Math.random() * numbers.length)],
        specialChars[Math.floor(Math.random() * specialChars.length)]
    ];

    // Fill the rest of the password
    const allChars = lowerChars + upperChars + numbers + specialChars;
    for (let i = 4; i < length; i++) {
        password.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    // Shuffle the characters in the password array. Dit zal de array doorelkaar schudden.
    /*-0.5 in combinatie zorgt ervoor dat het getal om te sorten altidj positief is.*/
    password = password.sort(() => Math.random() - 0.5);

    return password.join('');
}

console.log(genereerWachtwoord(25))
