"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PersonneV3_age;
class PersonneV3 {
    constructor(numero = undefined, nom = "?") {
        this.numero = numero;
        this.nom = nom;
        //private _age : number;
        //NB: #age : number est une syntaxe javascript très récente (environ 2020)
        //qui n'est supportée qu'avec target="es2015" ou plus coté tsconfig.json
        // le #signifie que #age est privée 
        _PersonneV3_age.set(this, void 0);
        __classPrivateFieldSet(this, _PersonneV3_age, 0, "f");
    }
    get age() { return __classPrivateFieldGet(this, _PersonneV3_age, "f"); }
    set age(newAge) {
        if (newAge >= 0)
            __classPrivateFieldSet(this, _PersonneV3_age, newAge, "f");
        //else console.log("age negatif interdit");
        else
            throw "age negatif invalide";
    }
    incrementerAge() {
        var _a;
        __classPrivateFieldSet(this, _PersonneV3_age, (_a = __classPrivateFieldGet(this, _PersonneV3_age, "f"), _a++, _a), "f");
    }
}
_PersonneV3_age = new WeakMap();
var p1v3 = new PersonneV3(1, "toto");
//p1v3.#age = 30; interdit car #age considéré comme privé car commencant par #
p1v3.age = 30;
try {
    p1v3.age = -50;
}
catch (e) {
    console.log(e);
}
console.log("age de p1 :" + p1v3.age); //30
console.log("numero de p1 :" + p1v3.numero);
console.log("p1v3=" + JSON.stringify(p1v3));
p1v3.incrementerAge();
console.log("nouvel age de p1 :" + p1v3.age); //31
//# sourceMappingURL=PersonneV3.js.map