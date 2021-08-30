type numberOrNull = number | null;

class PersonneV0 {
    numero : numberOrNull ; //=0 ou null;
    nom : string | null ; //="?" ou null;
    age : number | null ; //= 0 ou null;

    constructor(num:number | null=null,
                nom : string | null = null,
                age : number | null=null){
          this.numero = num;    this.nom=nom;    this.age=age;
    }

    incrementerAge(){
        if(this.age){
           this.age++;//ou bien this.age=this.age+1;
        }
    }
}
    var p1v0 : PersonneV0;
    p1v0 = new PersonneV0();
    console.log("p1v0 :" + p1v0); // affiche[object Object]
    console.log("p1v0 :" + JSON.stringify(p1v0)); // affiche {"numero":null,"nom":null,"age":null}
    p1v0 = new PersonneV0(1,"toto");
    p1v0.age= 30;    console.log("age de p1 :" + p1v0.age); //30
    console.log("nom de p1 :" + p1v0.nom);
    console.log("numero de p1 :" + p1v0.numero);
    p1v0.incrementerAge() ;
    console.log("nouvel age de p1 :" + p1v0.age); //31
    console.log("p1v0 :" + JSON.stringify(p1v0)); // affiche {"numero":1,"nom":"toto","age":31}  