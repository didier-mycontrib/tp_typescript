"use strict";
class Serie {
    constructor(label = "?", values = []) {
        this.label = label;
        this.values = values;
    }
    push(val) { this.values.push(val); }
}
/*
class Serie {
    constructor(public label : string ="?",
                public values : Array<number>=[]){
                }
    push(val:number){this.values.push(val);}
}*/
let serie1 = new Serie("serie1", [2, 6, 8]);
serie1.push(4);
serie1.push(5);
console.log(JSON.stringify(serie1));
let serie2;
serie2 = new Serie("serie2", ['abc', 'def']);
serie2.push('xyz');
console.log(JSON.stringify(serie2));
//# sourceMappingURL=Serie.js.map