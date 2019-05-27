"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateurs_1 = require("./validateurs");
// échantillon de valeurs :
var strings = ['Hello', '98052', '101'];
// tableau de validateurs 
var validators = {};
validators['ZIP code'] = new validateurs_1.ZipCodeValidator();
validators['Letters only'] = new validateurs_1.LettersOnlyValidator();
// Validation de chaque échantillon par chaque validateur :
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ')
            + name);
    }
});
//# sourceMappingURL=test-import-validateur.js.map