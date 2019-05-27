"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var my_mixins_1 = require("./my-mixins");
console.log('essai mixin');
var Avion = /** @class */ (function () {
    function Avion(type, altitude) {
        if (type === void 0) { type = "avion"; }
        if (altitude === void 0) { altitude = 0; }
        this.type = type;
        this.altitude = altitude;
    }
    return Avion;
}());
var a1 = new Avion();
console.log('a1=' + JSON.stringify(a1));
//nouvelle classe AvionFlottant basée sur classe Avion et enrichie via Mixin Flottant
var AvionFlottant = my_mixins_1.Flottant(Avion);
//nouvelle classe ActionFlottantWithTimestamp basée sur classe AvionFlottant et enrichie via Mixin Timestamped
//(resultat d'une double application de mixins)
var ActionFlottantWithTimestamp = my_mixins_1.Timestamped(AvionFlottant);
//test de AvionFlottant
var a2 = new AvionFlottant();
console.log('a2=' + JSON.stringify(a2));
a2.glisser();
//test de ActionFlottantWithTimestamp
var a3 = new ActionFlottantWithTimestamp();
console.log('a3=' + JSON.stringify(a3));
a3.glisser();
a3.logTimestamp();
