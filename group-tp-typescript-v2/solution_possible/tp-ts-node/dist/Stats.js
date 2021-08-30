"use strict";
class StatComputer {
    constructor(values = []) {
        this.values = values;
    }
    size() {
        return this.values.length;
    }
    average() {
        return this.sum() / this.size();
    }
    sum() {
        let s = 0;
        for (let i = 0; i < this.values.length; i++) {
            s += this.values[i];
        }
        return s;
    }
    ecartType() {
        let sce = 0; //somme des carrés des écarts à la moyenne
        let a = this.average();
        for (let i = 0; i < this.values.length; i++) {
            sce += Math.pow(this.values[i] - a, 2);
        }
        return Math.sqrt(sce / this.size());
    }
    buildStat(withEcartType = false) {
        return {
            size: this.size(),
            sum: this.sum(),
            average: this.average(),
            ecartType: withEcartType ? this.ecartType() : undefined
        };
    }
}
function buildStatFromValues(values) {
    let internatStatComputer = new StatComputer(values);
    return internatStatComputer.buildStat();
}
let myValues = [8, 2, 6, 4, 10];
let myStatComputer = new StatComputer(myValues);
console.log("size=" + myStatComputer.size());
console.log("sum=" + myStatComputer.sum());
console.log("average=" + myStatComputer.average());
console.log("ecartType=" + myStatComputer.ecartType());
console.log("myStatComputer.buildStat()=" + JSON.stringify(myStatComputer.buildStat(true)));
//# sourceMappingURL=Stats.js.map