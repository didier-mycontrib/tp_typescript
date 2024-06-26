export class Personne{
    public  static ageMajorite : number = 18;
   
    constructor(public numero:number=0,         
                public nom:string="?",                
                private _age:number=0){
                 //   test1();
    }

    occupations(){
        return "manger,dormir,loisir";
    }

    public estMajeur(): boolean{
       return (this._age >= Personne.ageMajorite);
    }

    public get age(){
        return this._age;
    }

    public set age(age:number){
        if(age>=0) this._age=age;
        //else throw "age négatif invalide"; //à ratrapper via try/catch
        else console.log("age négatif invalide");
    }

    incrementAge(){
           this._age++;
    }
}

//fonction interne que je n'exporte pas
function test1(){
    console.log("test1 de Personne");
}

//cette fonction sera indirectement exportée via export default ....
function afficherJolimentPersonne( p: Personne){
   console.log("*** " + JSON.stringify(p));
}

export default {
     name : "personnequeJaime",
     afficherJolimentPersonne : afficherJolimentPersonne
     //afficherJolimentPersonne
};



