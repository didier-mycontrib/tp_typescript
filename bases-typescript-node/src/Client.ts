class Client {
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

var c1 : Client  = new Client(1,"toto");
c1.age = 30; c1.age = -50;
console.log("age de c1 :" + c1.age);
console.log("nom de c1 :" + c1.nom);
console.log("numero de c1 :" + c1.numero);
