"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function getInUppercase(target, propertyName) {
    //target is protype objet of current object
    let value /*= Reflect.get(target,propertyName)*/; //will be used in subscoped get / set arrow functions
    Reflect.defineProperty(target, propertyName, {
        configurable: true,
        enumerable: true,
        get: () => {
            //console.log(">>> myLogPropertyDecorator , get value of propertyName=" + propertyName + " : " + value);
            if (value && typeof value == 'string')
                return value.toUpperCase(); // little adaptation
            else
                return value;
        },
        set: (newValue) => {
            //console.log(">>> myLogPropertyDecorator , set newValue of propertyName=" + propertyName + " : " + newValue);
            value = newValue;
        }
    });
}
function Min(minimum) {
    return function (target, propertyKey) {
        let value; /*= Reflect.get(target,propertyKey);*/
        const getter = () => value;
        const setter = (newVal) => {
            if (newVal < minimum) {
                value = 0; //set a default valid value
                //store errors fields in object
                let errMsg = `value for ${propertyKey} must be bigger than ${minimum} but was ${newVal}`;
                console.log(">>>ERROR: " + errMsg);
                throw errMsg;
            }
            else {
                value = newVal;
            }
        };
        Reflect.defineProperty(target, propertyKey, {
            configurable: true, enumerable: true,
            get: getter,
            set: setter
        });
    };
}
class Person {
    constructor(username = "toto", size = 0) {
        this.username = username;
        this.size = size;
    }
}
__decorate([
    getInUppercase
], Person.prototype, "username", void 0);
__decorate([
    Min(0)
], Person.prototype, "size", void 0);
let p1 = new Person("toto", 180);
console.log("p1.username=" + p1.username + " p1.size=" + p1.size);
try {
    p1.size = -33;
}
catch (ex) {
    console.log("EXECEPTION: " + ex);
}
console.log("p1.size=" + p1.size);
p1.size = 44;
console.log("p1.size=" + p1.size);
//# sourceMappingURL=test-valid-decorators.js.map