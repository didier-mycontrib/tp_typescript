var PISur2 = Math.PI / 2;
//PISur2 = 2; // Error, can't assign to a `const`
console.log("PISur2 = " + PISur2);
var tableau = new Array();
tableau[0] = "abc";
tableau[1] = "def";
var i = 5;
var j = 5;
//for(let i in tableau) {
for (var i_1 = 0; i_1 < tableau.length; i_1++) {
    console.log("*** at index " + i_1 + " value = " + tableau[i_1]);
}
//for(j=0; j<tableau.length; j++) {
for (var j = 0; j < tableau.length; j++) {
    console.log("### at index " + j + " value = " + tableau[j]);
}
console.log("i=" + i); //affiche i=5
console.log("j=" + j); //affiche j=2
//# sourceMappingURL=xyz.js.map