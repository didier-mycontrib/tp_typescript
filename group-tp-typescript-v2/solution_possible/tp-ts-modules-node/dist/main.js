"use strict";
//import { Serie } from "./Serie";
//import { buildStatFromValues, Stat } from "./Stats";
Object.defineProperty(exports, "__esModule", { value: true });
var Serie_1 = require("./Serie");
var Stats_1 = require("./Stats");
function myMainFunction() {
    console.log("----------myMainFunction -------------");
    var serie1 = new Serie_1.Serie("serie1", [2, 6, 8]);
    serie1.push(4);
    serie1.push(10);
    console.log(JSON.stringify(serie1));
    var statForSerie1;
    statForSerie1 = (0, Stats_1.buildStatFromValues)(serie1.values);
    console.log("moyenne =" + statForSerie1.average);
}
(0, Serie_1.testSerie)();
(0, Stats_1.testStats)();
myMainFunction();
//# sourceMappingURL=main.js.map