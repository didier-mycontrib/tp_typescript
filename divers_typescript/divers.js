var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var obj1 = {
    text: "aaa",
    ok: false,
    tags: ["v1"]
};
console.log("obj1=" + JSON.stringify(obj1));
var obj2 = JSON.parse(JSON.stringify(obj1)); //deep copy .
var obj3 = __assign({}, obj1); //shallowCopy (not an deep copy , same sub-array)
console.log("obj2=" + JSON.stringify(obj2));
console.log("obj3=" + JSON.stringify(obj3));
obj2.text = "bbb";
obj2.ok = true;
obj2.tags.push("v2");
console.log("after obj2update, obj1=" + JSON.stringify(obj1));
console.log("after obj2update, obj2=" + JSON.stringify(obj2));
obj3.text = "ccc";
obj3.ok = true;
obj3.tags.push("v3");
console.log("after obj3update, obj1=" + JSON.stringify(obj1));
console.log("after obj3update, obj3=" + JSON.stringify(obj3));
var obj4 = {
    text: "ddd",
    ok: false,
    tags: ["d1"]
};
function propV1(obj, key) {
    return obj[key];
}
function propV2(obj, key) {
    return obj[key];
}
var propOk1 = propV1(obj4, 'ok'); //boolean but inferred as any by typescript
propOk1 = 3;
var propOk2 = propV2(obj4, 'ok'); //boolean and inferred as boolean  by typescript
//propOk2 = 3; //error number is not assignable to  boolean  !!!!
//--------- never type (proche de void) : ne retourne rien (tout le temps)
function functionThrow() {
    throw new Error("This function return never");
}
var myBasicMap = [];
myBasicMap.push([1, "un"]);
//myBasicMap.push( ["2","deux"]); //Error
myBasicMap.push([2, "deux"]);
for (var _i = 0, myBasicMap_1 = myBasicMap; _i < myBasicMap_1.length; _i++) {
    var association = myBasicMap_1[_i];
    var clefNum = association[0], stringVal = association[1];
    //clefNum="abc"; //Error Type 'string' is not assignable to type 'number'
    stringVal = stringVal.toLowerCase();
    console.log(clefNum + " : " + stringVal);
}
var direction;
direction = "nord"; //ok
//direction = "vers_le_nord"; //Error
var directionQuelconque;
directionQuelconque = direction;
console.log(directionQuelconque);
var chiffre;
chiffre = 6; //OK
//chiffre =33; //Erreur
var nombreQuelconque;
nombreQuelconque = chiffre;
console.log(nombreQuelconque);
