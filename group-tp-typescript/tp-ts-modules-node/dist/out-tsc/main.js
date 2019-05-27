"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serie_1 = require("./Serie");
var Stats_1 = require("./Stats");
function myMainFunction() {
    var serie1 = new Serie_1.Serie("serie1", [2, 6, 8]);
    serie1.push(4);
    serie1.push(10);
    console.log(JSON.stringify(serie1));
    var statForSerie1;
    statForSerie1 = Stats_1.buildStatFromValues(serie1.values);
    console.log("moyenne =" + statForSerie1.average);
}
myMainFunction();
//# sourceMappingURL=main.js.map