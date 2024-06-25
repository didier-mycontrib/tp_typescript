class Personne{
    public  static ageMajorite : number = 18;
   
    constructor(public numero:number=0,         
                public nom:string="?",                
                private _age:number=0){
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

class Employe extends Personne{
    salaire:number=0;

    constructor(numero:number=0,nom:string="?",age:number=0,salaire:number=0){
         super(numero,nom,age);
         this.salaire=salaire;
    }

    occupations(){
        return super.occupations()+",travailler";
    }

    augmenterSalaire(pct:number){
        this.salaire = this.salaire * (1 + pct/100);
    }
}

var e1 = new Employe(1,"toto",35,2500);
console.log("Empoye e1 :" + JSON.stringify(e1));
//e1.salaire=3000;
e1.augmenterSalaire(2); //2% augmentation
console.log("Empoye e1 :" + JSON.stringify(e1));
console.log("e1.occupations()="+e1.occupations());

let p1 = new Personne(1,"toto", 50);
console.log("p1=" + JSON.stringify(p1));
console.log(`p1.age=${p1.age}`);

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
