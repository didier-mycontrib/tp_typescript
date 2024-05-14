

export function customElement(componentName:string){
    return function (constructor: Function) {
    constructor.prototype.componentName = componentName;
    console.log(`>>> customElement decorator -  componentName= ${componentName} `);
    customElements.define(componentName, <any> constructor);
    }
}   