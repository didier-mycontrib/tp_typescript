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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
var Personne_1 = require("./Personne");
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
}(Personne_1.Personne));
exports.Employe = Employe;
//# sourceMappingURL=Employe.js.map