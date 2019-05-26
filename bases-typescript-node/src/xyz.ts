

const PISur2 = Math.PI / 2;
//PISur2 = 2; // Error, can't assign to a `const`
console.log("PISur2 = " + PISur2);

var tableau : string[] = new Array<string>();
tableau[0] = "abc";  tableau[1] = "def";

var i:number = 5;  var j:number = 5;

//for(let i in tableau) {
for(let i=0; i<tableau.length; i++) {
    console.log("*** at index " + i + " value = " + tableau[i] ) ;
}

//for(j=0; j<tableau.length; j++) {
for(var j=0; j<tableau.length; j++) {
    console.log("### at index " + j + " value = " + tableau[j] ) ;
}

console.log("i=" + i);//affiche i=5
console.log("j=" + j);//affiche j=2
