"use strict";
class Personne {
    constructor(numero = 0, nom = "?", _age = 0) {
        this.numero = numero;
        this.nom = nom;
        this._age = _age;
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
Personne.ageMajorite = 18;
class Employe extends Personne {
    constructor(numero = 0, nom = "?", age = 0, salaire = 0) {
        super(numero, nom, age);
        this.salaire = 0;
        this.salaire = salaire;
    }
    occupations() {
        return super.occupations() + ",travailler";
    }
    augmenterSalaire(pct) {
        this.salaire = this.salaire * (1 + pct / 100);
    }
}
var e1 = new Employe(1, "toto", 35, 2500);
console.log("Empoye e1 :" + JSON.stringify(e1));
//e1.salaire=3000;
e1.augmenterSalaire(2); //2% augmentation
console.log("Empoye e1 :" + JSON.stringify(e1));
console.log("e1.occupations()=" + e1.occupations());
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
console.log("p2 estMajeur ? : " + p2.estMajeur());
p2.age = 17;
console.log("p2=" + JSON.stringify(p2));
console.log("p2 estMajeur ? : " + p2.estMajeur());
//let chose : any;  // 12 ou "abc" ou ...
let chose; // 12 ou "abc" ou …
let obj2;
//obj= null; 
obj2 = { numero: 2 };
//données souvent récupérées via HTTP
let persJsonString = '{ "numero":2 , "nom" : "titi" , "prenom" : "p" } ';
let persJs = JSON.parse(persJsonString);
//let persJs :IPerson = <IPerson> ( <any> JSON.parse(persJsonString) );
//avec castings explicites dans les cas pointus
// persJs = new IPerson(); interdit sur IPerson qui est une interface
let persJs2 = { numero: 3, nom: "Bon", prenom: "jean" };
function affPerson(p) {
    console.log("****" + p.nom + " " + p.numero);
}
function affPersonMoinsBien(p) {
    let pa = p;
    console.log("****" + pa["nom"] + " " + pa["numero"]);
}
affPerson(persJs2);
//affPersonMoinsBien(persJs2);
//# sourceMappingURL=Personne%20copy.js.map