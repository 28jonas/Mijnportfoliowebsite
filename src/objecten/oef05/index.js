// Klasse Voertuig
class Voertuig {
    constructor(model, bouwjaar) {
        this.model = model;
        this.bouwjaar = bouwjaar;
    }

    rijden() {
        return `${this.model} is aan het rijden.`;
    }

    starten() {
        return `${this.model} is gestart.`;
    }

    stoppen() {
        return `${this.model} is gestopt.`;
    }
}

// Klasse Auto die overerft van Voertuig
class Auto extends Voertuig {
    constructor(model, bouwjaar, type, versnelling, aandrijving) {
        super(model, bouwjaar);
        this.type = type;
        this.versnelling = versnelling;
        this.aandrijving = aandrijving;
    }

    beschrijf() {
        return `Model: ${this.model}, Bouwjaar: ${this.bouwjaar}, Type: ${this.type}, Versnelling: ${this.versnelling}, Aandrijving: ${this.aandrijving}`;
    }
}

let garagegrootte = 1;
let counter = 0;
// Event listener voor het formulier
document.getElementById("garageForm").addEventListener("submit", function (event){
    event.preventDefault();
    garagegrootte = parseInt(document.getElementById("garageSize").value);
    console.log(garagegrootte)
})


    document.getElementById("autoForm").addEventListener("submit", function (event) {
        if (counter < garagegrootte){
        event.preventDefault();//tegenhouden van de pagina refresh

        // Haal de waarden op uit het formulier
        const model = document.getElementById("model").value;
        const bouwjaar = document.getElementById("bouwjaar").value;
        const type = document.getElementById("type").value;
        const versnelling = document.getElementById("versnelling").value;
        const aandrijving = document.getElementById("aandrijving").value;

        // Maak een nieuwe auto aan
        const nieuweAuto = new Auto(model, bouwjaar, type, versnelling, aandrijving);

        // Voeg de auto toe aan de lijst
        const autoList = document.getElementById("autoList");
        const autoItem = document.createElement("li");
        autoItem.classList.add("list-group-item");
        autoItem.textContent = nieuweAuto.beschrijf();
        autoList.appendChild(autoItem);

        // Formulier resetten na toevoegen
        document.getElementById("autoForm").reset();
        counter = counter +1;
        console.log(counter)
        console.log(garagegrootte)

        /*progressbar*/
            document.getElementById("garageProgress").style.width = (counter/garagegrootte)*100 + "%";
            document.getElementById("garageProgress").textContent = (counter/garagegrootte)*100 + "%"


        } else{
            alert("De garage is vol. Er kunnen geen auto's meer worden toegevoegd.");
        }
    });




