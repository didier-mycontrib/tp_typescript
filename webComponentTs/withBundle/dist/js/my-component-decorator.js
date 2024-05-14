/*
export function customElement(componentName:string){
    return function (target: Function) {
    // save a reference to the original constructor
    const originalConstructor = target;
    //originalConstructor.prototype.additionalProperty="abc"; //syntax ok but not a very good practice
    //NB: use mixin in class decorator is not a very good idea (the constructed objet may be too different)
    // the new constructor behaviour
    const c: any = function (...args :any) {
    //customElements.define(componentName, originalConstructor)
    console.log(`>>> customElement decorator -  componentName= ${componentName} - New ${originalConstructor} is created`);
    return Reflect.construct(originalConstructor,args)
    }
    // copy prototype so intanceof operator still works
    c.prototype = originalConstructor.prototype;

    //customElements.define(componentName, c);
    // return new constructor (will override original)
    return c;
    }
}
*/
export function customElement(componentName) {
    return function (constructor) {
        constructor.prototype.componentName = componentName;
        console.log(`>>> customElement decorator -  componentName= ${componentName} `);
        customElements.define(componentName, constructor);
    };
}
//# sourceMappingURL=my-component-decorator.js.map