export class Personne {
  private _age : number;

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


// --------avec interface IPerson -----

export interface IPerson {
  numero : number;
  nom:string;
  //age? : number;
  prenom? : string
}


