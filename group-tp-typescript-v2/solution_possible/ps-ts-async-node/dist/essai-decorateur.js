"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log('essai decorateurs avec option --experimentalDecorators de tsc');
console.log('ou bien "experimentalDecorators": true dans tsconfig.json');
/* de 1 à 3 niveaux de code pour un décorateur:
---------------------------------------

//niveau quelquefois facultatif "decorator factory" pour déclenchement au runtime avec @decoXy(valP1,valP2)
//utile sur décorateur de méthode ( @decoXy() ou bien @decoXy(valP1) ) ,
//inutile sur décorateur de méthode ou de propriété si @decoXy sans paramètre NI PARENTHESE

function decoXy(p1, p2) {

  //niveau principal/obligatoire "decorateur" (META-PROGRAMMATION) :
  return function (target [, propertyKey [, descriptor_or_other]]) {
    
    //META-READAPTATION (descriptor, ...) du code qui sera déclenché

     descriptor.value = function(...args: any) {
         returnValue = ....apply(this, args);
    OU BIEN
    updateProperty = Object.defineProperty(...
    OU BIEN ...
        //niveau facultatif (mais souvent le plus utile): réadaption du code qui sera exécuté
        //...
     }

  }

}
*/
//method decorator:
//decorator factory [to apply it at runtime] 
//when declared with @myLogDecorator or @myLogDecorator(true) above a method
function myLogMethodDecocator(paramMaj) {
    if (paramMaj === void 0) { paramMaj = false; }
    //the decorator (internal):
    return function (target, methodNameAspropertyKey, descriptor) {
        var originalMethodFunction = descriptor.value;
        //console.log(">> originalMethodFunction (code)="+originalMethodFunction);
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //for methodDecorator , target = prototype object of current object (ex: Cercle.prototype)
            //console.log(">> in myLogDecorator, target (current obj) prototype as json string="+JSON.stringify(target));
            var returnValue = originalMethodFunction.apply(this, args);
            if (paramMaj && typeof returnValue == 'string') {
                returnValue = returnValue.toUpperCase();
            }
            var params = args.map(function (arg) { return JSON.stringify(arg); }).join();
            console.log(">>myLogMethodDecocator intercept call of ".concat(methodNameAspropertyKey, "(").concat(params, ")")
                + " returnValue is ".concat(returnValue));
            return returnValue;
        };
        return descriptor;
    };
}
function myPerfMethodDecocator() {
    //the decorator (internal):
    return function (target, methodNameAspropertyKey, descriptor) {
        var originalMethodFunction = descriptor.value;
        //console.log(">> originalMethodFunction (code)="+originalMethodFunction);
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            //for methodDecorator , target = prototype object of current object (ex: Cercle.prototype)
            //console.log(">> in myLogDecorator, target (current obj) prototype as json string="+JSON.stringify(target));
            var hrTimeAvant = process.hrtime();
            var avant = hrTimeAvant[0] * 1000000 + hrTimeAvant[1] / 1000; //Date.now();//window.performance.now();
            var returnValue = originalMethodFunction.apply(this, args);
            var hrTimeApres = process.hrtime();
            var apres = hrTimeApres[0] * 1000000 + hrTimeApres[1] / 1000; //Date.now();//window.performance.now();
            var params = args.map(function (arg) { return JSON.stringify(arg); }).join();
            console.log(">>myPerfDecocator intercept call of ".concat(methodNameAspropertyKey, ". execution time= ").concat(apres - avant, " micro-secondes"));
            return returnValue;
        };
        return descriptor;
    };
}
//property decorator:
function myLogPropertyDecorator(target, propertyName) {
    //target is protype objet of current object
    var value; //will be used in subscoped get / set arrow functions
    var updateProperty = Object.defineProperty(target, propertyName, {
        configurable: true,
        enumerable: true,
        get: function () {
            console.log(">>> myLogPropertyDecorator , get value of propertyName=" + propertyName + " : " + value);
            if (value && typeof value == 'string')
                return value.toUpperCase(); // little adaptation
            else
                return value;
        },
        set: function (newValue) {
            console.log(">>> myLogPropertyDecorator , set newValue of propertyName=" + propertyName + " : " + newValue);
            value = newValue;
        }
    });
}
function myMinValueDecocator(minValue) {
    if (minValue === void 0) { minValue = 0; }
    return function (target, propertyName) {
        //target is protype objet of current object
        var value; //will be used in subscoped get / set arrow functions
        var updateProperty = Object.defineProperty(target, propertyName, {
            configurable: true,
            enumerable: true,
            get: function () {
                return value;
            },
            set: function (newValue) {
                if (newValue >= minValue)
                    value = newValue;
                else { //console.log(`>>myMinValueDecocator: newValue=${newValue} not set for ${propertyName} !!!`)
                    //value=minValue;
                    throw "newValue=".concat(newValue, " invalid for ").concat(propertyName, " !!!");
                }
            }
        });
    };
}
//class decorator:
function myLogClassDecorator() {
    return function (target) {
        // save a reference to the original constructor
        var originalConstructor = target;
        //originalConstructor.prototype.additionalProperty="abc"; //syntax ok but not a very good practice
        //NB: use mixin in class decorator is not a very good idea (the constructed objet may be too different)
        // the new constructor behaviour
        var c = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log(">>> myLogClassDecorator , New: ".concat(originalConstructor['name'], " is created"));
            return Reflect.construct(originalConstructor, args);
        };
        // copy prototype so intanceof operator still works
        c.prototype = originalConstructor.prototype;
        // return new constructor (will override original)
        return c;
    };
}
//Autres decorateurs possibles : sur accesseur get ou set ...
//                               sur un paramètre d'une méthode
var Cercle = /** @class */ (function () {
    function Cercle(xC, yC, rayon) {
        if (xC === void 0) { xC = 0; }
        if (yC === void 0) { yC = 0; }
        if (rayon === void 0) { rayon = 0; }
        this.xC = xC;
        this.yC = yC;
        this.unite = "?";
        this.rayon = rayon;
    }
    Cercle.prototype.description = function () {
        return "Cercle de centre (" + this.xC + "," + this.yC + ") et de rayon " + this.rayon;
    };
    Cercle.prototype.traitementLong = function () {
        var x = 2;
        for (var i = 0; i < 20000; i++) {
            x = Math.sqrt(i);
        }
    };
    Cercle.prototype.aire = function () {
        this.traitementLong();
        return Math.PI * this.rayon * this.rayon;
    };
    Cercle.prototype.perimetre = function () {
        return Math.PI * this.rayon * this.rayon;
    };
    Cercle.prototype.carre = function (x) {
        return x * x;
    };
    Cercle.prototype.addition = function (a, b) {
        return a + b;
    };
    __decorate([
        myLogPropertyDecorator,
        __metadata("design:type", String)
    ], Cercle.prototype, "unite", void 0);
    __decorate([
        myMinValueDecocator(0),
        __metadata("design:type", Number)
    ], Cercle.prototype, "rayon", void 0);
    __decorate([
        myLogMethodDecocator(true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Cercle.prototype, "description", null);
    __decorate([
        myLogMethodDecocator(),
        myPerfMethodDecocator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Cercle.prototype, "aire", null);
    __decorate([
        myLogMethodDecocator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], Cercle.prototype, "perimetre", null);
    __decorate([
        myLogMethodDecocator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Number)
    ], Cercle.prototype, "carre", null);
    __decorate([
        myLogMethodDecocator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", Number)
    ], Cercle.prototype, "addition", null);
    Cercle = __decorate([
        myLogClassDecorator(),
        __metadata("design:paramtypes", [Number, Number, Number])
    ], Cercle);
    return Cercle;
}());
//Cercle.prototype.unite="m";
var c1 = new Cercle(100, 80, 50);
var descriptionC1 = c1.description();
console.log("descriptionC1=" + descriptionC1);
c1.unite = 'cm';
console.log("unite de c1=" + c1.unite);
var perimetreC1 = c1.perimetre();
console.log("perimetre de c1 =" + perimetreC1);
var aireC1 = c1.aire();
console.log("aire de c1 =" + aireC1);
var troisAuCarre = c1.carre(3);
console.log("troisAuCarre =" + troisAuCarre);
var deuxPlusTrois = c1.addition(2, 3);
console.log("deuxPlusTrois =" + deuxPlusTrois);
try {
    c1.rayon = -20;
}
catch (e) {
    console.log("error:" + e);
}
console.log("c1=" + c1.description());
//# sourceMappingURL=essai-decorateur.js.map