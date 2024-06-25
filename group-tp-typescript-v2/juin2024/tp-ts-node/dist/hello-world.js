"use strict";
let message;
//message = 5; //wrong type
message = "Hello world";
console.log(message);
let m = " coucou";
m = " coucou 2";
console.log("m=" + m);
var x = 25;
let chx = "25";
console.log(typeof x);
let v;
let obj = null;
if (v == obj)
    console.log("v et obj identiques");
obj = { nom: "France", capitale: 'Paris' };
console.log(JSON.stringify(obj));
//# sourceMappingURL=hello-world.js.map