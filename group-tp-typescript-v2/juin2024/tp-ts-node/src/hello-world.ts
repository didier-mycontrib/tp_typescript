let message : string ;
//message = 5; //wrong type
message = "Hello world";
console.log(message);

let m =" coucou";
m=" coucou 2";
console.log("m="+m);

var x  :number =25;

let chx="25";

console.log(typeof x);

let v:string|undefined;
let obj : object | null= null;

if(v==obj)
    console.log("v et obj identiques");

obj = { nom : "France" , capitale : 'Paris'};
console.log(JSON.stringify(obj));


