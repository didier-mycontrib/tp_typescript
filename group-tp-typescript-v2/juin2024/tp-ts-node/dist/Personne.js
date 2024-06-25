"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(numero = 0, nom = "?", _age = 0) {
        this.numero = numero;
        this.nom = nom;
        this._age = _age;
        //   test1();
    }
    occupations() {
        return "manger,dormir,loisir";
    }
    estMajeur() {
        return (this._age >= Personne.ageMajorite);
    }
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
    incrementAge() {
        this._age++;
    }
}
exports.Personne = Personne;
Personne.ageMajorite = 18;
//fonction interne que je n'exporte pas
function test1() {
    console.log("test1 de Personne");
}
//# sourceMappingURL=Personne.js.map