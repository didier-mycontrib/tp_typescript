import { Personne } from "./Personne";

export class Employe extends Personne{
    constructor(numero : number =0,
                nom : string ="?",
                public salaire : number = 0){
            super(numero,nom);    
      }
  }