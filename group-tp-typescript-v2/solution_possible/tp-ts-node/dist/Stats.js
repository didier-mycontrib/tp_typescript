"use strict";
/*
interface StatBuilder {
    buildStat(withEcartType:boolean):Stat;
}

interface WithStats extends StatBuilder {
     size() : number;
     average():number;
     sum():number;
     ecartType():number;
}*/
var StatComputer /*implements WithStats*/ = /** @class */ (function () {
    function StatComputer(values) {
        if (values === void 0) { values = []; }
        this.values = values;
    }
    StatComputer.prototype.size = function () {
        return this.values.length;
    };
    StatComputer.prototype.average = function () {
        return this.sum() / this.size();
    };
    StatComputer.prototype.sum = function () {
        var s = 0;
        for (var i = 0; i < this.values.length; i++) {
            s += this.values[i];
        }
        return s;
    };
    StatComputer.prototype.ecartType = function () {
        var sce = 0; //somme des carrés des écarts à la moyenne
        var a = this.average();
        for (var i = 0; i < this.values.length; i++) {
            sce += Math.pow(this.values[i] - a, 2);
        }
        return Math.sqrt(sce / this.size());
    };
    StatComputer.prototype.buildStat = function (withEcartType) {
        if (withEcartType === void 0) { withEcartType = false; }
        return {
            size: this.size(),
            sum: this.sum(),
            average: this.average(),
            ecartType: withEcartType ? this.ecartType() : undefined
        };
    };
    return StatComputer;
}());
function buildStatFromValues(values) {
    var internatStatComputer = new StatComputer(values);
    return internatStatComputer.buildStat();
}
//# sourceMappingURL=Stats.js.map