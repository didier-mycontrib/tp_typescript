"use strict";
var SimpleApp = /** @class */ (function () {
    function SimpleApp() {
        this.x = 0;
        this.y = 0;
    }
    SimpleApp.prototype.init = function () {
        var _this = this;
        var btnAdd = document.getElementById("btnActionXy");
        btnAdd === null || btnAdd === void 0 ? void 0 : btnAdd.addEventListener('click', function (evt) { return _this.onActionXy(evt); }, false);
    };
    SimpleApp.prototype.onActionXy = function (evt) {
        console.log(evt.target.value);
        this.x = Number(document.getElementById("x").value);
        this.y = Number(document.getElementById("y").value);
        var spanRes = document.getElementById("resultat");
        console.log("x:" + this.x + ",y=" + this.y);
        spanRes.innerHTML = this.x + this.y;
    };
    return SimpleApp;
}());
var app = new SimpleApp();
//# sourceMappingURL=simple.js.map