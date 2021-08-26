var anything;
anything = "abc";
anything = 123;
var s1 = anything; //ok typescript
console.log("value of string s1 is " + s1); //strange execution result
var something;
something = "abc";
something = 123;
// NB: The unknown type is only assignable to the any type and the unknown type itself
var s2 = "";
//s2 = something; //Error Type 'unknown' is not assignable to type 'string'
console.log("value of string s2 is " + s2);
var something2;
something2 = something; //OK
var something3;
something3 = anything; //OK 
//------control Flow Based Type Narrowing ----
function controlFlowBasedTypeNarrowingEx1(s) {
    var ch = "";
    //ch = s; //Error Type 'unknown' is not assignable to type 'string'
    if (typeof s === "string") {
        ch = s;
        console.log("string ch=" + ch);
    }
    var d;
    if (s instanceof Date) {
        d = s;
        console.log("year=" + d.getUTCFullYear());
    }
}
controlFlowBasedTypeNarrowingEx1("abc");
controlFlowBasedTypeNarrowingEx1(123);
controlFlowBasedTypeNarrowingEx1(new Date());
//------ explicit Type Narrowing / Casting ----
function withUnknowAssignementEffect(s) {
    var ch;
    //ch = s as string; //syntaxe 1 via as
    ch = s; //syntaxe alternative 2 via <...>
    console.log("string(or not) ch=" + ch);
}
withUnknowAssignementEffect("ABC");
withUnknowAssignementEffect(1234);
//-----
var sx = "abc";
//let sx2 : string =new String("abc"); //Error !!!
