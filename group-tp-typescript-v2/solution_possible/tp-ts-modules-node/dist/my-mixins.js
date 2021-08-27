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
exports.WithSimpleStat = void 0;
//Mixin ajoutant la fonctionalité "WithSimpleStat":
function WithSimpleStat(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getValues = function () {
            return Reflect.get(this, "values");
        };
        class_1.prototype.size = function () {
            return this.getValues().length;
        };
        class_1.prototype.average = function () {
            return this.sum() / this.size();
        };
        class_1.prototype.sum = function () {
            var s = 0;
            for (var i = 0; i < this.getValues().length; i++) {
                s += this.getValues()[i];
            }
            return s;
        };
        return class_1;
    }(Base));
}
exports.WithSimpleStat = WithSimpleStat;
//# sourceMappingURL=my-mixins.js.map