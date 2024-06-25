"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employe_1 = require("./Employe");
// le pers du import sans accolade correspond à la chose exportée
// via export default dans le fichier Personne.ts
const Personne_1 = __importStar(require("./Personne"));
var e1 = new Employe_1.Employe(1, "toto", 35, 2500);
console.log("Empoye e1 :" + JSON.stringify(e1));
//e1.salaire=3000;
e1.augmenterSalaire(2); //2% augmentation
console.log("Empoye e1 :" + JSON.stringify(e1));
console.log("e1.occupations()=" + e1.occupations());
let p1 = new Personne_1.Personne(1, "toto", 50);
console.log("p1=" + JSON.stringify(p1));
console.log(`p1.age=${p1.age}`);
Personne_1.default.afficherJolimentPersonne(p1);
let p2 = new Personne_1.Personne();
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
affPerson(persJs);
//affPersonMoinsBien(persJs);
//# sourceMappingURL=testPersEmp.js.map