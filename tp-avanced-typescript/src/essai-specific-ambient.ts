/// <reference path = "../lib/d.ts/my-iife-js-lib.d.ts" />
/// <reference path = "../lib/d.ts/my-any-js-lib.d.ts" />

function div_delegating_to_js_lib(x:number, y:number){
    let res= myIifeJsLib.divide(x,y);
    console.log(""+x+"/"+y+"="+res.toString());
    return res;
} 

function carre_delegating_to_js_lib(x:number){
    let res= myIifeJsLib.carre(x);
    console.log(""+x+"/"+x+"="+res.toString());
    return res;
} 

function message_delegating_to_js_lib(x:number){
    console.log("2*3="+mult_js_lib(2,3));
    return JSON.stringify(getBasicInfo(x));
}

