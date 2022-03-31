class Personne {
  /*private*/ protected _age : number;

  constructor(public numero :number|undefined = undefined,
              public nom : string ="?"){
    this._age = 0;
  }

  public get age() : number { return this._age;}
  public set age(newAge: number)  {
    if(newAge>=0)
       this._age = newAge;
    //else console.log("age negatif interdit");
    else throw "age negatif invalide"
  }

  incrementerAge():void {
    this._age++;
  }
}

var p1 : Personne  = new Personne(1,"toto");
//p1._age = 34; impossible car private
p1.age = 30; 
try{
p1.age = -50;
}
catch(e){
  console.log(e);
}
console.log("age de p1 :" + p1.age); //30
console.log("nom de p1 :" + p1.nom);
console.log("numero de p1 :" + p1.numero);
p1.incrementerAge() ;
console.log("nouvel age de p1 :" + p1.age); //31

class Employe extends Personne{
  constructor(numero : number =0,
              nom : string ="?",
              p_age : number = 0,
              public salaire : number = 0){
          super(numero,nom);  
          this._age = p_age; 
          salaire=0;
    }

    incrementerAge() :void{
       console.log("incrementerAge version employee");
       super.incrementerAge();
    }
}
/*
class Employe extends Personne{

  salaire : number =0;

  constructor(numero : number =0,
              nom : string ="?"){
      super(numero,nom);    
    }
}*/

var e1 = new Employe(1,"toto",45,2500);
e1.salaire=3000;
console.log("Empoye e1 :" + JSON.stringify(e1) + ' de type=' + typeof(e1));

//-------------- tests avec  instanceof
if( e1 instanceof Employe){
    console.log("e1 est de type Employe")
}
if( p1 instanceof Employe){
  console.log("p1 est de type employe")
}else{
  console.log("p1 n'est pas de type Employe")
}

//--------- age plutot que _age en JSON via Reflect.defineProperty / enumerable
let p2 = new Personne(2,"toto2");
p2.age=45;
console.log(p2.nom + ' ' + p2.age);
console.log(p2);
console.log(JSON.stringify(p2));

Reflect.defineProperty(p2, "_age", {value: p2.age ,
writable : true, enumerable : false, configurable : true});
Reflect.defineProperty(p2, "age", {value: p2.age ,
    writable : true, enumerable : true, configurable : true});
console.log(">>>>"+JSON.stringify(p2))

// --------avec interface IPerson -----

interface IPerson {
  numero : number;
  nom:string;
  age? : number;
  prenom? : string
}

//let chose : any;  // 12 ou "abc" ou ...
let chose : unknown;  // 12 ou "abc" ou ...
let obj : object | null ; 
//obj= null; 
obj = { numero : 2}

//données souvent recupérées via HTTP
let persJsonString = '{ "numero":2 , "nom" : "titi" , "prenom" : "p" } ';
let persJs :IPerson = JSON.parse(persJsonString);
//let persJs :IPerson = <IPerson> ( <any> JSON.parse(persJsonString) );
//avec castings explicites dans les cas pointus

 //persJs = new IPerson();// interdit sur IPerson qui est une interface
let persJs2 : IPerson = { numero:3  , nom : "Bon" , prenom : "jean"} ;

function  affPerson(p:IPerson):void{
    console.log("****" + p.nom +  " " + p.numero)
}

function  affPersonMoinsBien(p:object):void{
    let pa = <any> p;
    console.log("****" + pa["nom"] +  " " + pa["numero"])
}

affPerson(persJs);

let p3 : Personne;
p3= Object.assign(new Personne() , persJs );
//Object.assign(target, source) opère une sorte de fusion entre 2 objets javascript
//ça recopie toutes les sous parties communes de source vers target (.numero , .nom)
//et ça retourne le résultat
console.log(p3.age);
p3.incrementerAge();
console.log(p3.age);


