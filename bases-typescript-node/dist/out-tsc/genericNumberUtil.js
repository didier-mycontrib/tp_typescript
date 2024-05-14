"use strict";
var GenericNumberUtil = /** @class */ (function () {
    function GenericNumberUtil() {
    }
    GenericNumberUtil.prototype.add = function (x, y) {
        return (Number(x) + Number(y));
    };
    return GenericNumberUtil;
}());
var myGenericNumber = new GenericNumberUtil();
myGenericNumber.zeroValue = 0;
var resAddAsNumber = myGenericNumber.add(5, 6); //return 11
console.log('resAddAsNumber=' + resAddAsNumber);
var stringNumeric = new GenericNumberUtil();
stringNumeric.zeroValue = "";
var resAddAsString = stringNumeric.add("5", "6"); //return "11"
console.log('resAddAsString=' + resAddAsString);
//# sourceMappingURL=genericNumberUtil.js.map