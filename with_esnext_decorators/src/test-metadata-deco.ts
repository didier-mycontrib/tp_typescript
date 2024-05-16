const serializables = Symbol(); //nouvelle clef unique


type Context =
    | ClassAccessorDecoratorContext
    | ClassGetterDecoratorContext
    | ClassFieldDecoratorContext;

export function serialize(_target: any, context: Context): void {
    console.log("@serialize with context.name=" + context.name.toString());
    console.log("@serialize with _target=" + _target);
    if (context.static || context.private) {
        throw new Error("Can only serialize public instance members.")
    }
    if (typeof context.name === "symbol") {
        throw new Error("Cannot serialize symbol-named properties.");
    }
    console.log("@serialize with context.metadata=" + context.metadata);
    if(context.metadata==null) return;
    const propNames =
        (context.metadata[serializables] as string[] | undefined) ??= [];
    propNames.push(context.name);
}

export function jsonify(instance: object): string {
    //Symbol.metadata ??= Symbol("Symbol.metadata");
    let symbolMetadata = Symbol.metadata ;
    if(symbolMetadata == undefined)  
        symbolMetadata= Symbol("Symbol.metadata");
    const metadata =  instance.constructor[Symbol.metadata];
    console.log("metadata="+metadata);
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


// Define a class where we want to apply serialization metadata
class Person {
    firstName: string;
    lastName: string;

    @serialize 
    age: number;

    @serialize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Define a custom method to generate JSON representation
    toJSON() {
        return jsonify(this);
    }
}

// Create an instance of the Person class
const person = new Person("John", "Doe", 30);

// Serialize the person object to JSON using the toJSON method
const serializedPerson = person.toJSON();

console.log(serializedPerson);
// Output: { "age": 30, "fullName": "John Doe" }