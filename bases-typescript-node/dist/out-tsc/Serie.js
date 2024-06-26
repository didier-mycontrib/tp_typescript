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
var Serie = /** @class */ (function () {
    function Serie(label, values) {
        if (label === void 0) { label = "?"; }
        if (values === void 0) { values = []; }
        this.label = label;
        this.values = values;
    }
    Serie.prototype.push = function (val) { this.values.push(val); };
    return Serie;
}());
var StatComputer = /** @class */ (function () {
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
        for (var i_1 = 0; i_1 < this.values.length; i_1++) {
            s += this.values[i_1];
        }
        return s;
    };
    StatComputer.prototype.ecartType = function () {
        var sce = 0;
        var a = this.average();
        for (var i_2 = 0; i_2 < this.values.length; i_2++) {
            sce += Math.pow(this.values[i_2] - a, 2);
        }
        return Math.sqrt(sce) / this.size();
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
var StatSerie = /** @class */ (function (_super) {
    __extends(StatSerie, _super);
    function StatSerie(label, values) {
        if (label === void 0) { label = "?"; }
        if (values === void 0) { values = []; }
        var _this = _super.call(this, label, values) || this;
        _this.statComputer = new StatComputer(values);
        return _this;
    }
    Object.defineProperty(StatSerie.prototype, "size", {
        get: function () { return this.statComputer.size(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StatSerie.prototype, "average", {
        get: function () { return this.statComputer.average(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StatSerie.prototype, "sum", {
        get: function () { return this.statComputer.sum(); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StatSerie.prototype, "ecartType", {
        get: function () { return this.statComputer.ecartType(); },
        enumerable: false,
        configurable: true
    });
    StatSerie.prototype.buildStat = function (withEcartType) {
        if (withEcartType === void 0) { withEcartType = false; }
        return this.statComputer.buildStat(withEcartType);
    };
    return StatSerie;
}(Serie));
var s1 = new StatSerie("s1");
s1.push(3);
s1.push(5.0);
s1.push(7.0);
console.log(JSON.stringify(s1));
/*
console.log("s1.size()="+s1.size());
console.log("s1.sum()="+s1.sum());
console.log("s1.average()="+s1.average());
*/
console.log("s1.buildStat()=" + JSON.stringify(s1.buildStat(true)));
console.log("s1.ecartType()=" + s1.ecartType);
//# sourceMappingURL=Serie.js.map