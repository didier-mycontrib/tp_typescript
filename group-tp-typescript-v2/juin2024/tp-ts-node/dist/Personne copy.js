"use strict";
class Personne {
    /*
    private  static _ageMajorite : number = 18;

    public static get ageMajorite(){
        return Personne._ageMajorite;
    }

    public static set ageMajorite(ageMajorite:number){
        Personne._ageMajorite=ageMajorite;
    }
    */
    constructor(numero = 0, nom = "?", _age = 0) {
        this.numero = numero;
        this.nom = nom;
        this._age = _age;
    }
    estMajeur() {
        /*
        if(this._age >= Personne.ageMajorite)
            return true;
        else
        return false;
        */
        return (this._age >= Personne.ageMajorite);
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (age >= 0)
            this._age = age;
        //else throw "age négatif invalide"; //à ratrapper via try/catch
        else
            console.log("age négatif invalide");
    }
    incrementAge() {
        this._age++;
    }
}
//public numTelephone : string ="0606050606";
Personne.ageMajorite = 18;
let p1 = new Personne(1, "toto", 50);
console.log("p1=" + JSON.stringify(p1));
console.log(`p1.age=${p1.age}`);
let p2 = new Personne();
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
Personne.ageMajorite = 17;
console.log("p2 estMajeur ? : " + p2.estMajeur());
//# sourceMappingURL=Personne%20copy.js.map