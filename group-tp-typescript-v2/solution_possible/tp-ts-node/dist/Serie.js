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
/*
class Serie {
    constructor(public label : string ="?",
                public values : Array<number>=[]){
                }
    push(val:number){this.values.push(val);}
}*/
var serie1 = new Serie("serie1", [2, 6, 8]);
serie1.push(4);
serie1.push(5);
console.log(JSON.stringify(serie1));
var serie2;
serie2 = new Serie("serie2", ['abc', 'def']);
serie2.push('xyz');
console.log(JSON.stringify(serie2));
//# sourceMappingURL=Serie.js.map