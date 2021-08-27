"use strict";
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
//# sourceMappingURL=Serie.js.map