"use strict";
var Jour;
(function (Jour) {
    Jour[Jour["lundi"] = 0] = "lundi";
    Jour[Jour["mardi"] = 1] = "mardi";
    Jour[Jour["mercredi"] = 2] = "mercredi";
    Jour[Jour["jeudi"] = 3] = "jeudi";
    Jour[Jour["vendredi"] = 4] = "vendredi";
    Jour[Jour["samedi"] = 5] = "samedi";
    Jour[Jour["dimanche"] = 6] = "dimanche";
})(Jour || (Jour = {}));
;
let j;
j = Jour.lundi;
console.log("j=" + j);
let sj = Jour[j];
console.log("sj=" + sj);
let valEnumAsString = "mercredi"; //valeur qui pourrait être saisie au clavier
let numMercredi = Jour[valEnumAsString];
console.log("numMercredi=" + numMercredi);
//# sourceMappingURL=f2-enum.js.map