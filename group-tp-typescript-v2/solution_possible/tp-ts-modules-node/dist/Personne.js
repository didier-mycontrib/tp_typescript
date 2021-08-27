"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(numero, nom) {
        if (numero === void 0) { numero = undefined; }
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
            //else console.log("age negatif interdit");
            else
                throw "age negatif invalide";
        },
        enumerable: false,
        configurable: true
    });
    Personne.prototype.incrementerAge = function () {
        this._age++;
    };
    return Personne;
}());
exports.Personne = Personne;
//# sourceMappingURL=Personne.js.map