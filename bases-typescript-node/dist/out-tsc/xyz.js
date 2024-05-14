"use strict";
var PISur2 = Math.PI / 2;
//PISur2 = 2; // Error, can't assign to a `const`
console.log("PISur2 = " + PISur2);
var tab = new Array();
tab[0] = "abc";
tab[1] = "def";
var i = 5;
var j = 5;
//for(let i in tab) {
for (var i_1 = 0; i_1 < tab.length; i_1++) {
    console.log("*** at index " + i_1 + " value = " + tab[i_1]);
}
//for(j=0; j<tab.length; j++) {
for (var j = 0; j < tab.length; j++) {
    console.log("### at index " + j + " value = " + tab[j]);
}
console.log("i=" + i); //affiche i=5
console.log("j=" + j); //affiche j=2
//# sourceMappingURL=xyz.js.map