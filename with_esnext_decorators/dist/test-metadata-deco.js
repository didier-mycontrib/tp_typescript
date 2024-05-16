"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonify = exports.serialize = void 0;
const serializables = Symbol(); //nouvelle clef unique
function serialize(_target, context) {
    console.log("@serialize with context.name=" + context.name.toString());
    console.log("@serialize with _target=" + _target);
    if (context.static || context.private) {
        throw new Error("Can only serialize public instance members.");
    }
    if (typeof context.name === "symbol") {
        throw new Error("Cannot serialize symbol-named properties.");
    }
    console.log("@serialize with context.metadata=" + context.metadata);
    if (context.metadata == null)
        return;
    const propNames = context.metadata[serializables] ??= [];
    propNames.push(context.name);
}
exports.serialize = serialize;
function jsonify(instance) {
    //Symbol.metadata ??= Symbol("Symbol.metadata");
    let symbolMetadata = Symbol.metadata;
    if (symbolMetadata == undefined)
        symbolMetadata = Symbol("Symbol.metadata");
    const metadata = instance.constructor[Symbol.metadata];
    console.log("metadata=" + metadata);
    const propNames = metadata?.[serializables];
    if (!propNames) {
        throw new Error("No members marked with @serialize.");
    }
    const pairStrings = propNames.map(key => {
        const strKey = JSON.stringify(key);
        const strValue = JSON.stringify(instance[key]);
        return `${strKey}: ${strValue}`;
    });
    return `{ ${pairStrings.join(", ")} }`;
}
exports.jsonify = jsonify;
// Define a class where we want to apply serialization metadata
let Person = (() => {
    let _instanceExtraInitializers = [];
    let _age_decorators;
    let _age_initializers = [];
    let _age_extraInitializers = [];
    let _get_fullName_decorators;
    return class Person {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _age_decorators = [serialize];
            _get_fullName_decorators = [serialize];
            __esDecorate(this, null, _get_fullName_decorators, { kind: "getter", name: "fullName", static: false, private: false, access: { has: obj => "fullName" in obj, get: obj => obj.fullName }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        firstName = __runInitializers(this, _instanceExtraInitializers);
        lastName;
        age = __runInitializers(this, _age_initializers, void 0);
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        constructor(firstName, lastName, age) {
            __runInitializers(this, _age_extraInitializers);
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        // Define a custom method to generate JSON representation
        toJSON() {
            return jsonify(this);
        }
    };
})();
// Create an instance of the Person class
const person = new Person("John", "Doe", 30);
// Serialize the person object to JSON using the toJSON method
const serializedPerson = person.toJSON();
console.log(serializedPerson);
// Output: { "age": 30, "fullName": "John Doe" }
