"use strict";
class Personne {
    constructor(numero = 0, nom = "?", age = 0) {
        this.numero = numero;
        this.nom = nom;
        this.age = age;
    }
    incrementAge() {
        this.age++;
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
//# sourceMappingURL=Personne.js.map