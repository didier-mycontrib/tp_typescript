

const PISur2 = Math.PI / 2;
//PISur2 = 2; // Error, can't assign to a `const`
console.log("PISur2 = " + PISur2);

var tab : string[] = new Array<string>();
tab[0] = "abc";  tab[1] = "def";

var i:number = 5;  var j:number = 5;

//for(let i in tab) {
for(let i=0; i<tab.length; i++) {
    console.log("*** at index " + i + " value = " + tab[i] ) ;
}

//for(j=0; j<tab.length; j++) {
for(var j=0; j<tab.length; j++) {
    console.log("### at index " + j + " value = " + tab[j] ) ;
}

console.log("i=" + i);//affiche i=5
console.log("j=" + j);//affiche j=2
