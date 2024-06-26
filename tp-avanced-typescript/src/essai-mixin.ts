import { Autonome, Constructor , Flottant , Timestamped} from './my-mixins';

console.log('essai mixin');

class Avion {
    constructor(public type: string="avion" ,
               public altitude:number=0){

    }
}

class Voiture {
    constructor(public marque:string="?",
               public modele: string="?"){

    }
}

let a1 = new Avion();
console.log('a1='+JSON.stringify(a1));



//nouvelle classe AvionFlottant basée sur classe Avion et enrichie via Mixin Flottant
const AvionFlottant = Flottant(Avion);

//nouvelle classe ActionFlottantWithTimestamp basée sur classe AvionFlottant et enrichie via Mixin Timestamped
//(resultat d'une double application de mixins)
const ActionFlottantWithTimestamp=Timestamped(AvionFlottant);

//test de AvionFlottant
let a2 = new AvionFlottant();
console.log('a2='+JSON.stringify(a2));
a2.glisser();

//test de ActionFlottantWithTimestamp
let a3 = new ActionFlottantWithTimestamp();
console.log('a3='+JSON.stringify(a3));
a3.glisser();
a3.logTimestamp();

const VoitureAutonome = Autonome(Voiture);

let va = new VoitureAutonome("peugeot","3008");
/*
let va = new VoitureAutonome();
va.marque="peugeot";
va.modele="3008";
*/
va.licence="licence xy";
va.automatique();
console.log('va='+JSON.stringify(va));


