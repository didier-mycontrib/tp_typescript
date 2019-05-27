//module Validation {
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/; // volontairement non exporté (détail interne)
    var numberRegexp = /^[0-9]+$/; // volontairement non exporté (détail interne)
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
// échantillon de valeurs :
var strings = ['Hello', '98052', '101'];
// tableau de validateurs 
var validators = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Validation de chaque échantillon par chaque validateur :
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ')
            + name);
    }
});
//# sourceMappingURL=valid-namespace.js.map