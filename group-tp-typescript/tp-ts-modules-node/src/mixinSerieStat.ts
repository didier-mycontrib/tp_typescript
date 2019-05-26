import { Serie } from "./Serie";
import { WithSimpleStat } from "./my-mixins";
 

//nouvelle classe SerieWithStat basée sur classe Série et enrichie via Mixin WithSimpleStat
const SerieWithStat = WithSimpleStat(Serie);

//test de SerieWithStat
let serie3 = new SerieWithStat("serie3",[2,6,8]);
serie3.push(4);serie3.push(10);
console.log("size of serie3="+serie3.size());
console.log("sum of serie3="+serie3.sum());
console.log("average of serie3="+serie3.average());





