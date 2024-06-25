import { Employe } from "./Employe";

// le pers du import sans accolade correspond à la chose exportée
// via export default dans le fichier Personne.ts
import  pers , { Personne } from "./Personne";

var e1 = new Employe(1,"toto",35,2500);
console.log("Empoye e1 :" + JSON.stringify(e1));
//e1.salaire=3000;
e1.augmenterSalaire(2); //2% augmentation
console.log("Empoye e1 :" + JSON.stringify(e1));
console.log("e1.occupations()="+e1.occupations());

let p1 = new Personne(1,"toto", 50);
console.log("p1=" + JSON.stringify(p1));
console.log(`p1.age=${p1.age}`);

pers.afficherJolimentPersonne(p1);

let p2 = new Personne();
console.log("p2=" + JSON.stringify(p2));
p2.age=40;
p2.incrementAge();
console.log("p2=" + JSON.stringify(p2));
p2.age=-5; //sera refusé , pas pris en compte
console.log("p2=" + JSON.stringify(p2));
console.log("p2 estMajeur ? : " + p2.estMajeur());
p2.age=17;
console.log("p2=" + JSON.stringify(p2));
console.log("p2 estMajeur ? : " + p2.estMajeur()); 
//Personne.ageMajorite=17;
//console.log("p2 estMajeur ? : " + p2.estMajeur());
/*
Reflect.defineProperty(p2, "_age", {value: p2.age , 
    writable : true, enumerable : false, configurable : true});
Reflect.defineProperty(p2, "age", {value: p2.age ,
    writable : true, enumerable : true, configurable : true});
console.log(">>>>"+JSON.stringify(p2))
*/
interface IPerson {
numero : number;
nom:string;
//age? : number;
prenom? : string
}

//let chose : any;  // 12 ou "abc" ou ...
let chose : unknown;  // 12 ou "abc" ou …
let obj2 : object | null ; 
//obj= null; 
obj2 = { numero : 2}
//données souvent récupérées via HTTP
let persJsonString = '{ "numero":2 , "nom" : "titi" , "prenom" : "p" } ';
let persJs :IPerson = JSON.parse(persJsonString);
//let persJs :IPerson = <IPerson> ( <any> JSON.parse(persJsonString) );
//avec castings explicites dans les cas pointus
// persJs = new IPerson(); interdit sur IPerson qui est une interface
let persJs2 : IPerson = { numero:3  , nom : "Bon" , prenom : "jean"} ;
function  affPerson(p:IPerson):void{
   console.log("****" + p.nom +  " " + p.numero)
}
function  affPersonMoinsBien(p:object):void{
   let pa = <any> p;
   console.log("****" + pa["nom"] +  " " + pa["numero"])
}

affPerson(persJs);
//affPersonMoinsBien(persJs);

