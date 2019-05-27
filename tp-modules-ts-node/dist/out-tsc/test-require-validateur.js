var validateurs = require('./validateurs');

// échantillon de valeurs :
var strings = ['Hello', '98052', '101'];
// tableau de validateurs 
var validators = {};
validators['ZIP code'] = new validateurs.ZipCodeValidator();
validators['Letters only'] = new validateurs.LettersOnlyValidator();
// Validation de chaque échantillon par chaque validateur :
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ')
                                                 + name);
    }
});