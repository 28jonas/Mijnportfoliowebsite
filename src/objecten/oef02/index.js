/*let Auto = {
    Dit was het gene vroeger zie oef01
}*/
/*es6 2015*/
class Auto{
    constructor(merk, model) {
        this.merk = merk;
        this.model = model;
    }

    /*functie/method*/
    beschrijf(){
        return `${this.merk} - ${this.model}`
    }
}

let auto1 = new Auto("Peugot", "307");
let auto2 = new Auto("Mercedes", "C200")

console.log(auto1.beschrijf());
console.log(auto2.beschrijf());