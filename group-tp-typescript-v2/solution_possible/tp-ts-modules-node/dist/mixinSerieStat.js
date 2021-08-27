"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serie_1 = require("./Serie");
var my_mixins_1 = require("./my-mixins");
//nouvelle classe SerieWithStat basée sur classe Série et enrichie via Mixin WithSimpleStat
var SerieWithStat = (0, my_mixins_1.WithSimpleStat)(Serie_1.Serie);
//test de SerieWithStat
var serie3 = new SerieWithStat("serie3", [2, 6, 8]);
serie3.push(4);
serie3.push(10);
console.log("size of serie3=" + serie3.size());
console.log("sum of serie3=" + serie3.sum());
console.log("average of serie3=" + serie3.average());
//# sourceMappingURL=mixinSerieStat.js.map