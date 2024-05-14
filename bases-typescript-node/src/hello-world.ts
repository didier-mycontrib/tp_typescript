var s : string;
s= "hello world 5";
var x /*:number*/ = 13;
var y :number = 3;
var z =x+y;
console.log(s + ' ' + z);


/* var */ const  tableau : string[] = new Array<string>();
//tableau.push("abc");
//tableau.push("def");
tableau[0] = "abc";
tableau[1] = "def";

var i /*:number*/ = 5;

for(/*let*/const i  in tableau) {
    console.log("** at index " + i + " value = " + tableau[i] ) ;
}

console.log("i=" + i);
