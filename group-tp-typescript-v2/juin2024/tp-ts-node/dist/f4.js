"use strict";
/*
function add(a:number,b:number) :number{
    return a+b;
}*/
/*
var add = function (a:number,b:number) :number{
    return a+b;
}*/
/*
var add = (a:number,b:number) :number =>{
    return a+b;
}
*/
var add = (a, b) => a + b;
console.log("type de var add=" + typeof add); //affiche function
let resAdd = add(5, 6);
console.log("resAdd=" + resAdd);
/*
var fctDiffere = () => { console.log(new Date())}
setTimeout(fctDiffere , 3000); //déclenche du code en différé dans "000 ms = 3s
*/
setTimeout(() => { console.log(new Date()); }, 3000); //déclenche du code en différé dans "000 ms = 3s
//# sourceMappingURL=f4.js.map