"use strict";
/// <reference path = "../lib/d.ts/my-js-lib.d.ts" />
/// <reference path = "../lib/d.ts/my-iife-js-lib.d.ts" />
/// <reference path = "../lib/d.ts/my-any-js-lib.d.ts" />
function add_delegating_to_js_lib(x, y) {
    var res = add_js_lib(x, y);
    testMyIifeJsLib();
    console.log(prefix_string_js_lib("resulat", res.toString()));
    testAnyJsLib();
    return res;
}
function testMyIifeJsLib() {
    console.log("6/2=" + myIifeJsLib.divide(6, 2));
    console.log("4*4=" + myIifeJsLib.carre(4));
}
function testAnyJsLib() {
    console.log("2*3=" + mult_js_lib(2, 3));
    console.log(getBasicInfo(4));
}
