/// <reference path="IForme.ts" />
var n1;
(function (n1) {
    var Forme = /** @class */ (function () {
        function Forme() {
        }
        Forme.prototype.draw = function () {
            console.log("dessiner la forme");
        };
        return Forme;
    }());
    n1.Forme = Forme;
})(n1 || (n1 = {}));
