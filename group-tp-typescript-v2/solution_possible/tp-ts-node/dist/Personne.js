"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(numero, nom) {
        if (numero === void 0) { numero = 0; }
        if (nom === void 0) { nom = "?"; }
        this.numero = numero;
        this.nom = nom;
        this._age = 0;
    }
    Object.defineProperty(Personne.prototype, "age", {
        get: function () { return this._age; },
        set: function (newAge) {
            if (newAge >= 0)
                this._age = newAge;
            else
                console.log("age negatif interdit");
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
var p1 = new Personne(1, "toto");
p1.age = 30;
p1.age = -50;
console.log("age de p1 :" + p1.age);
console.log("nom de p1 :" + p1.nom);
console.log("numero de p1 :" + p1.numero);
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(numero, nom, salaire) {
        if (numero === void 0) { numero = 0; }
        if (nom === void 0) { nom = "?"; }
        if (salaire === void 0) { salaire = 0; }
        var _this = _super.call(this, numero, nom) || this;
        _this.salaire = salaire;
        return _this;
    }
    return Employe;
}(Personne));
var e1 = new Employe(1, "toto", 2500);
e1.salaire = 3000;
console.log("Empoye e1 :" + JSON.stringify(e1));
//# sourceMappingURL=Personne.js.map