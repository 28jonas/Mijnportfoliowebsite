/*Voeg een scroll event toe aan de pagina die in de console logt
wanneer de gebruiker naar beneden scrolt. Toon het huidige scrollniveau.*/

window.addEventListener("scroll", scrollfunction);

function scrollfunction(){
    let coordinaten = Math.floor(window.scrollY) ;
    return console.log(`${coordinaten}`);
}