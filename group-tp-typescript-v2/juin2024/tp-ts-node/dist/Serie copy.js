"use strict";
class Serie {
    constructor(name = "serie", tabVal = []) {
        this.name = "serie";
        this.tabVal = [];
        this.name = name;
        this.tabVal = tabVal;
    }
    push(val) {
        this.tabVal.push(val);
    }
}
let serie1 = new Serie("serie1", [2, 6, 8]);
serie1.push(4);
serie1.push(5); //[2,6,8 , 4, 5 ]
console.log(JSON.stringify(serie1));
//# sourceMappingURL=Serie%20copy.js.map