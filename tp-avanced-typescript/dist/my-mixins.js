"use strict";
//collection of mixins (to use and re-use)
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
exports.Timestamped = exports.Flottant = void 0;
//Mixin ajoutant la fonctionalité "flotter sur l'eau":
function Flottant(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nbFlotteurs = 2; //default value=2
            return _this;
        }
        class_1.prototype.glisser = function () {
            console.log("glisser sur l'eau avec nbFlotteurs=" + this.nbFlotteurs);
        };
        return class_1;
    }(Base));
}
exports.Flottant = Flottant;
//Mixin ajoutant la fonctionalité générique "timestamped":
function Timestamped(Base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.timestamp = Date.now(); //default value=now 
            return _this;
        }
        class_2.prototype.logTimestamp = function () {
            console.log("object created at timestamp=" + this.timestamp);
        };
        return class_2;
    }(Base));
}
exports.Timestamped = Timestamped;
