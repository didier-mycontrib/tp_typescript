"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
const Personne_1 = require("./Personne");
class Employe extends Personne_1.Personne {
    constructor(numero = 0, nom = "?", age = 0, salaire = 0) {
        super(numero, nom, age);
        this.salaire = 0;
        this.salaire = salaire;
    }
    occupations() {
        return super.occupations() + ",travailler";
    }
    augmenterSalaire(pct) {
        this.salaire = this.salaire * (1 + pct / 100);
    }
}
exports.Employe = Employe;
//# sourceMappingURL=Employe.js.map