var Client = /** @class */ (function () {
    function Client(numero, nom) {
        if (numero === void 0) { numero = 0; }
        if (nom === void 0) { nom = "?"; }
        this.numero = numero;
        this.nom = nom;
        this._age = 0;
    }
    Object.defineProperty(Client.prototype, "age", {
        get: function () { return this._age; },
        set: function (newAge) {
            if (newAge >= 0)
                this._age = newAge;
            else
                console.log("age negatif interdit");
        },
        enumerable: true,
        configurable: true
    });
    return Client;
}());
var c1 = new Client(1, "toto");
c1.age = 30;
c1.age = -50;
console.log("age de c1 :" + c1.age);
console.log("nom de c1 :" + c1.nom);
console.log("numero de c1 :" + c1.numero);
//# sourceMappingURL=Client.js.map