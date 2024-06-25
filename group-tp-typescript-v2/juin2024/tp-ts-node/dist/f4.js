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
//# sourceMappingURL=f4.js.map