class Personne {
  private _age : number;

  constructor(public numero : number =0,
              public nom : string ="?"){
    this._age = 0;
  }

  public get age() : number { return this._age;}
  public set age(newAge: number)  {
    if(newAge>=0)
       this._age = newAge;
    else console.log("age negatif interdit");
  }
}

var p1 : Personne  = new Personne(1,"toto");
p1.age = 30; p1.age = -50;
console.log("age de p1 :" + p1.age);
console.log("nom de p1 :" + p1.nom);
console.log("numero de p1 :" + p1.numero);

class Employe extends Personne{
  constructor(numero : number =0,
              nom : string ="?",
              public salaire : number = 0){
          super(numero,nom);    
    }
}

var e1 = new Employe(1,"toto",2500);
e1.salaire=3000;
console.log("Empoye e1 :" + JSON.stringify(e1));


