import { Personne} from "./Personne"

export class Employe extends Personne{
    salaire:number=0;

    constructor(numero:number=0,nom:string="?",age:number=0,salaire:number=0){
         super(numero,nom,age);
         this.salaire=salaire;
         //test1();
    }

    occupations(){
        return super.occupations()+",travailler";
    }

    augmenterSalaire(pct:number){
        this.salaire = this.salaire * (1 + pct/100);
    }
}

//fonction interne que je n'exporte pas
function test1(){
    console.log("test1 de Employe");
}