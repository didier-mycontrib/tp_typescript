export class Personne {
    constructor(numero = 0, nom = "?", _age = 0) {
        this.numero = numero;
        this.nom = nom;
        this._age = _age;
        //   test1();
    }
    occupations() {
        return "manger,dormir,loisir";
    }
    estMajeur() {
        return (this._age >= Personne.ageMajorite);
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (age >= 0)
            this._age = age;
        //else throw "age négatif invalide"; //à ratrapper via try/catch
        else
            console.log("age négatif invalide");
    }
    incrementAge() {
        this._age++;
    }
}
Personne.ageMajorite = 18;
//fonction interne que je n'exporte pas
function test1() {
    console.log("test1 de Personne");
}
//cette fonction sera indirectement exportée via export default ....
function afficherJolimentPersonne(p) {
    console.log("*** " + JSON.stringify(p));
}
export default {
    name: "personnequeJaime",
    afficherJolimentPersonne: afficherJolimentPersonne
    //afficherJolimentPersonne
};
//# sourceMappingURL=Personne.js.map