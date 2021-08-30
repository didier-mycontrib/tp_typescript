/*
class Qcm {
    passer():void {
        console.log("Passer le QCM TS")
    }
}
var obj = new Qcm();
obj.passer();


//====================

var qcm1:string = "qcm";
var qcm2:string ;
var qcm3='qcm' ;
var qcm4;
var qcm5='10';
var qcm6:number=<number><any> qcm5;

// var global_num = 12
class QcmV2 {
    nombre = 20;
    static sval = 10;
    storeQcm() : void {
        var local_num=14;
    }
}

var qq = new QcmV2();
console.log("qq="+JSON.stringify(qq));
*/

//=============================

interface IQcm {
    ref:string;
    nom:string,
    passer: () => string
}

var qcm1:IQcm = {
    ref:'ts',
    nom:"Base de ts",
    passer : () : string => { return "passé !";}
}
console.log(qcm1.nom)
console.log(qcm1.passer())