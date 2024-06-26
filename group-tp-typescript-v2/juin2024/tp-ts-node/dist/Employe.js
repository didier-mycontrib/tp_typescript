import { Personne } from "./Personne";
export class Employe extends Personne {
    constructor(numero = 0, nom = "?", age = 0, salaire = 0) {
        super(numero, nom, age);
        this.salaire = 0;
        this.salaire = salaire;
        //test1();
    }
    occupations() {
        return super.occupations() + ",travailler";
    }
    augmenterSalaire(pct) {
        this.salaire = this.salaire * (1 + pct / 100);
    }
}
//fonction interne que je n'exporte pas
function test1() {
    console.log("test1 de Employe");
}
//# sourceMappingURL=Employe.js.map