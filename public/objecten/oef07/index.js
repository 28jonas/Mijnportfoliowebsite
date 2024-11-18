/*Get all elements*/
let settingsform = document.getElementById("settings-form")
let getal1 = 0;
let getal2 = 0;
const eenOef = [];
let eenRandomGetal = 0

let mininputgetallen = 0
let maxinputgetallen = 0
let aantalVragen = 0
let oefening = document.getElementById("exercise-container");

function maakRandomGetal(mininputgetallen, maxinputgetallen){
    //hoe laat ik nu de computer random digitsmin of digitsmax kiezen?
    let aantalDigits = Math.floor(Math.random()*(maxinputgetallen - mininputgetallen+1)) + mininputgetallen

    eenRandomGetal = Math.floor(Math.random()* (10**aantalDigits));

    return eenRandomGetal;
}

settingsform.addEventListener("submit", function (event){
    event.preventDefault()

    mininputgetallen = parseInt(document.getElementById("digits-min").value) ;
    maxinputgetallen = parseInt(document.getElementById("digits-max").value) ;
    aantalVragen = document.getElementById("numQuestions").value;

    oefening.innerHTML =""
    for (let i = 0; i< aantalVragen; i++){
        /*Genereren van getallen*/
        getal1 = maakRandomGetal(mininputgetallen, maxinputgetallen)
        getal2 = maakRandomGetal(mininputgetallen, maxinputgetallen)

        /*zorgen dat getallen op juiste plaats komen*/


        /*Maken van div*/
        let div = document.createElement("div");
        div.setAttribute("class", "")
        div.classList.add("col", "border", "border-danger")
        oefening.appendChild(div)

        /*Maken van de paragraaf*/
        let nieuweParagraaf = document.createElement("label")
        nieuweParagraaf.setAttribute("for", "numQuestions");
        nieuweParagraaf.className = "form-label";
        nieuweParagraaf.id = "labelOefening";
        nieuweParagraaf.textContent = `${getal1} + ${getal2}`;
        som = getal1 + getal2
        div.appendChild(nieuweParagraaf)

        /*Maken van de input*/
        let input = document.createElement("input");
        input.setAttribute("type", "class");
        input.type = "number";
        input.classList.add("form-control");
        div.appendChild(input);

        /*maken van een object*/
        const oefeningobject = {
            nummer1 : getal1,
            nummer2 : getal2
        }
        eenOef.push(oefeningobject);

        input.addEventListener("blur", function(){
            if (oefeningobject.nummer1 + oefeningobject.nummer2 === parseInt(input.value)){
                input.style.backgroundColor = "green"
                input.style.color = "white"
            }else{
                input.style.backgroundColor = "red"
            }

        })
    }
    console.log(eenOef)
})



setTimeout(() => console.log(eenOef), 8000);





