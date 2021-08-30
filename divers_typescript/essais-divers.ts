
class C1 {
    m1():void {
        console.log("m1")
    }
}
var objC1 = new C1();
objC1.m1();

/*
//sera transformé en un code javascript de ce type:

var C1 =  (function () {
    function C1() {
    }
    C1.prototype.m1 = function () {
        console.log("m1");
    };
    return C1;
}());
var objC1 = new C1();
objC1.m1();
*/

//====================

var v='10'; //de type string
var vv:number =<number><any> v; //idiot d'un point de vue "fonctionnel"
                                //MAIS SANS ERREUR A LA COMPILATION !!!!
console.log("vv="+v + " de type " + typeof vv); //affiche vv=10 de type string

//====================

 
var global_v = 12; //variable globale
class C2 {
    b = 20; //attribut ou propriété ou variable d'instance (dans la classe)
    static sv = 1; //valeur commune (partagée) par toutes les instances de la classe
    m2() : void {
        var l1=0; //variable locale (rangée dans pile / stack)
        console.log(this.b + l1);
    }
}

var o = new C2();
console.log("o="+JSON.stringify(o)); //o={"b":20}


//=============================

interface I2 /* I2 = jeux de mot de collégien */{
    p1:string;
    p2:string,
    refOp: () => string //propriete de type reférence de fonction retournant string
}

var objHideux:I2 = {
    p1:'prop1',
    p2:"prop2",
    refOp : () : string => { return "chaine qui va bien";}
           //arrow function en tant que valeur de refOp
           //style un peu etrange mais syntaxiquement correct
}
console.log(objHideux.p1) //ok
console.log(objHideux.refOp()); //ok , affiche chaine qui va bien

//-------------------------
var objAa=undefined;
var objBb = objAa;
console.log("objAA="+objAa +" of type " + typeof objAa);//objAA=undefined of type undefined
console.log("objBb="+objBb +" of type " + typeof objBb);//objBb=undefined of type undefined

//----------------------

var objIdNom = {
    id : 1,
    nom : "obj1",
    p3 : 'p3'
};
var refFctAff = function( obj : {id:number, nom:string} ){
    //nb , le paramétre de cette fonction doit être un objet 
    //comportant au minimum .id de type number et .nom de type string
    console.log("id vaut " + obj.id);
    console.log("nom vaut " + obj.nom);
}
refFctAff(objIdNom); //ok
//affiche id vaut 1
//affiche nom vaut obj1

//-------------------------------------

class MyGeneric<T> {
    val : T;  //attribut / propriété  de type T
    fctAdd : (x:T,y:T)=>T //attribut / propriété  de type reférence de fonction 
                          //code tres inhabituel (sans méthode/operation) mais correct
}

let numNum = new MyGeneric<number>(); //ok
numNum.val = 6; //ok
numNum.fctAdd = function(x,y) { return x+y;}; //ok (on donne enfin une valeur à .fctAdd)
                                               //rattachement d'un code attendu
console.log(numNum.fctAdd(5,6)); //ok effectue l'appel du code rattaché ,, affiche 11