var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const serializables = Symbol(); //nouvelle clef unique
export function serialize(_target, context) {
    if (context.static || context.private) {
        throw new Error("Can only serialize public instance members.");
    }
    if (typeof context.name === "symbol") {
        throw new Error("Cannot serialize symbol-named properties.");
    }
    if (context.metadata == null)
        return;
    const propNames = context.metadata[serializables] ??= [];
    propNames.push(context.name);
}
/*
export function jsonify(instance: object): string {
    const metadata = <any> instance.constructor[Symbol.metadata];
    const propNames = metadata?.[serializables] as string[] | undefined;
    if (!propNames) {
        throw new Error("No members marked with @serialize.");
    }
    const pairStrings = propNames.map(key => {
        const strKey = JSON.stringify(key);
        const strValue = JSON.stringify((instance as any)[key]);
        return `${strKey}: ${strValue}`;
    });
    return `{ ${pairStrings.join(", ")} }`;
}
*/
// Define a class where we want to apply serialization metadata
class Person {
    firstName;
    lastName;
    age;
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Define a custom method to generate JSON representation
    toJSON() {
        //return jsonify(this);
        return "{}";
    }
}
__decorate([
    serialize,
    __metadata("design:type", Number)
], Person.prototype, "age", void 0);
__decorate([
    serialize,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Person.prototype, "fullName", null);
// Create an instance of the Person class
const person = new Person("John", "Doe", 30);
// Serialize the person object to JSON using the toJSON method
const serializedPerson = person.toJSON();
console.log(serializedPerson);
// Output: { "age": 30, "fullName": "John Doe" }
//# sourceMappingURL=test-metadata-deco.js.map