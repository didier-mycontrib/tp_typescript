import { ZipCodeValidator, LettersOnlyValidator } from "./validateurs.js";
// échantillon de valeurs :
var strings = ['Hello', '98052', '101'];
// tableau de validateurs 
var validators = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
// Validation de chaque échantillon par chaque validateur :
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ')
            + name);
    }
});
//# sourceMappingURL=test-import-validateur.js.map