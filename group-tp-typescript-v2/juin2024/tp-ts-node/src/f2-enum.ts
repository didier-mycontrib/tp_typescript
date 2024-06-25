enum Jour { "lundi" , "mardi" , "mercredi" , "jeudi" , "vendredi" , "samedi" , "dimanche"};

let j : Jour ;
j=Jour.lundi;

console.log("j="+j);

let sj : string = Jour[j];
console.log("sj="+sj);

let valEnumAsString : string = "mercredi"; //valeur qui pourrait être saisie au clavier
let numMercredi : number = Jour[valEnumAsString as keyof (typeof Jour)];
console.log("numMercredi="+numMercredi);