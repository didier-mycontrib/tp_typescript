"use strict";
class Personne {
    get age() {
        return this._age;
    }
    set age(age) {
        if (age >= 0)
            this._age = age;
        //else throw "age négatif invalide"; //à ratrapper via try/catch
        else
            console.log("age négatif invalide");
    }
    constructor(numero = 0, nom = "?", age = 0) {
        this.numero = numero;
        this.nom = nom;
        this._age = age;
    }
    incrementAge() {
        this._age++;
    }
}
let p1 = new Personne(1, "toto", 50);
console.log("p1=" + JSON.stringify(p1));
console.log(`p1.age=${p1.age}`);
let p2 = new Personne();
console.log("p2=" + JSON.stringify(p2));
p2.age = 40;
p2.incrementAge();
console.log("p2=" + JSON.stringify(p2));
p2.age = -5; //sera refusé , pas pris en compte
console.log("p2=" + JSON.stringify(p2));
//# sourceMappingURL=Personne%20copy.js.map