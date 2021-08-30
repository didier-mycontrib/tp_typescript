"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(numero, nom) {
        if (numero === void 0) { numero = undefined; }
        if (nom === void 0) { nom = "?"; }
        this.numero = numero;
        this.nom = nom;
        this._age = 0;
    }
    Object.defineProperty(Personne.prototype, "age", {
        get: function () { return this._age; },
        set: function (newAge) {
            if (newAge >= 0)
                this._age = newAge;
            //else console.log("age negatif interdit");
            else
                throw "age negatif invalide";
        },
        enumerable: false,
        configurable: true
    });
    Personne.prototype.incrementerAge = function () {
        this._age++;
    };
    return Personne;
}());
var p1 = new Personne(1, "toto");
p1.age = 30;
try {
    p1.age = -50;
}
catch (e) {
    console.log(e);
}
console.log("age de p1 :" + p1.age); //30
console.log("nom de p1 :" + p1.nom);
console.log("numero de p1 :" + p1.numero);
p1.incrementerAge();
console.log("nouvel age de p1 :" + p1.age); //31
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(numero, nom, salaire) {
        if (numero === void 0) { numero = 0; }
        if (nom === void 0) { nom = "?"; }
        if (salaire === void 0) { salaire = 0; }
        var _this = _super.call(this, numero, nom) || this;
        _this.salaire = salaire;
        return _this;
    }
    return Employe;
}(Personne));
var e1 = new Employe(1, "toto", 2500);
e1.salaire = 3000;
console.log("Empoye e1 :" + JSON.stringify(e1) + ' de type=' + typeof (e1));
//-------------- tests avec  instanceof
if (e1 instanceof Employe) {
    console.log("e1 est de type Employe");
}
if (p1 instanceof Employe) {
    console.log("p1 est de type employe");
}
else {
    console.log("p1 n'est pas de type Employe");
}
//--------- age plutot que _age en JSON via Reflect.defineProperty / enumerable
var p2 = new Personne(2, "toto2");
p2.age = 45;
console.log(p2.nom + ' ' + p2.age);
console.log(p2);
console.log(JSON.stringify(p2));
Reflect.defineProperty(p2, "_age", { value: p2.age,
    writable: true, enumerable: false, configurable: true });
Reflect.defineProperty(p2, "age", { value: p2.age,
    writable: true, enumerable: true, configurable: true });
console.log(">>>>" + JSON.stringify(p2));
//let chose : any;  // 12 ou "abc" ou ...
var chose; // 12 ou "abc" ou ...
var obj;
//obj= null; 
obj = { numero: 2 };
//données souvent recupérées via HTTP
var persJsonString = '{ "numero":2 , "nom" : "titi" , "prenom" : "p" } ';
var persJs = JSON.parse(persJsonString);
//let persJs :IPerson = <IPerson> ( <any> JSON.parse(persJsonString) );
//avec castings explicites dans les cas pointus
// persJs = new IPerson(); interdit sur IPerson qui est une interface
var persJs2 = { numero: 3, nom: "Bon", prenom: "jean" };
function affPerson(p) {
    console.log("****" + p.nom + " " + p.numero);
}
function affPersonMoinsBien(p) {
    var pa = p;
    console.log("****" + pa["nom"] + " " + pa["numero"]);
}
affPerson(persJs);
var p3;
p3 = Object.assign(new Personne(), persJs);
//Object.assign(target, source) opère une sorte de fusion entre 2 objets javascript
//ça recopie toutes les sous parties communes de source vers target (.numero , .nom)
//et ça retourne le résultat
console.log(p3.age);
p3.incrementerAge();
console.log(p3.age);
//# sourceMappingURL=Personne%20copy.js.map