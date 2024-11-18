/*Persoonlijke gegevens*/
const caloriebehoeftebtn = document.getElementById("caloriebehoeftebtn")
let BMR = 0;

let totaalCalorieen = 0;
let totaalKoolhydraten = 0;
let totaalVetten = 0;
let totaalEiwitten = 0;
let caloriedag= {}

caloriebehoeftebtn.addEventListener("click", function (){
    /*Get all id's*/
    const radioMan = document.getElementById("radioMan").checked;
    const radioVrouw = document.getElementById("radioVrouw").checked;
    const leeftijd = parseInt(document.getElementById("leeftijd").value) ;
    const lengte = parseInt(document.getElementById("lengte").value) ;
    const gewicht = parseInt(document.getElementById("gewicht").value) ;
    const activiteitsniveau = parseFloat(document.getElementById("activiteitsniveau").value);

    /*Berekenen van de caloriebehoefte van via de Harris-Benedict formule*/
    if(radioMan === true){
        BMR = (88.362 + (13.397 * gewicht) + (4.799*lengte) - (5.677*leeftijd)) * activiteitsniveau;
        BMR = BMR.toFixed()
    }else {
        BMR = (447.593 + (9.247 * gewicht) + (3.098*lengte) - (4.330*leeftijd)) * activiteitsniveau;
        BMR = BMR.toFixed()
    }

    /*Het op de pagina zetten van BMR waarde*/
    const dagcal = document.getElementById("dagcal")
    dagcal.innerHTML= `Dagelijkse Caloriebehoeft: ${BMR} kcal`
    caloriedag.calorieen = parseInt(BMR);
});

/*Toevoegen van een maaltijd*/
const btnmaaltijd = document.getElementById("btnmaaltijd");

const divEten = document.createElement("div")
divEten.classList.add("list-group-item")
const totaaleten = document.getElementById("totaaleten")
totaaleten.appendChild(divEten);

const maxEten = document.createElement("p");
totaaleten.appendChild(maxEten)

btnmaaltijd.addEventListener("click", function (){
    const maaltijdNaam = document.getElementById("maaltijdnaam").value;
    const calorieen = parseInt(document.getElementById("calorieen").value);
    const koolhydraten = parseInt(document.getElementById("koolhydraten").value);
    const vetten = parseInt(document.getElementById("vetten").value);
    const eiwitten = parseInt(document.getElementById("eiwitten").value);
    const eten = document.getElementById("eten")

    const listitem = document.createElement("li")
    listitem.classList.add("list-group-item")
    listitem.innerHTML = `${maaltijdNaam} - ${calorieen} kcal - ${koolhydraten} KH - ${vetten} V - ${eiwitten}EW`
    eten.appendChild(listitem)

    totaalCalorieen = totaalCalorieen + calorieen;
    totaalKoolhydraten = totaalKoolhydraten + koolhydraten;
    totaalVetten = totaalVetten + vetten;
    totaalEiwitten = totaalEiwitten + eiwitten;
    divEten.innerHTML = `Totaal: ${totaalCalorieen}kcal, ${totaalKoolhydraten}g koolhydraten, ${totaalVetten}g vetten, ${totaalEiwitten}g eiwitten`

    if (totaalCalorieen > caloriedag.calorieen){
        maxEten.innerHTML = "Waarschuwing. U heeft uw dagelijkse caloriebehoeft overschreden!"
    }
})