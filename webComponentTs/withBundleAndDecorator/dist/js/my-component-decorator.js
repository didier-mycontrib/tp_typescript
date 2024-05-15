//for @customElement("toggle-panel-component") / simple class decorator
export function customElement(componentName) {
    return function (constructor) {
        constructor.prototype.componentName = componentName;
        console.log(`>>> customElement decorator -  componentName= ${componentName} `);
        customElements.define(componentName, constructor);
    };
}
/*for @customComponent({ name:"toggle-panel-component" ,
                        styles:`...`,
                        template:`...`
                        })
 sophiticated class decorator
 */
export function customComponent(componentDef) {
    return function (constructor) {
        constructor.prototype.componentName = componentDef.name;
        console.log(`>>> customComponent decorator -  componentName= ${componentDef.name} `);
        if (componentDef.styles != null)
            constructor.prototype.componentCssTemplateString = () => componentDef.styles;
        if (componentDef.template != null)
            constructor.prototype.componentHtmlTemplateString = () => { var _a; return (_a = componentDef.template) === null || _a === void 0 ? void 0 : _a.replace(/#/g, "$"); };
        //NB: #{} is replaced by ${} before a futur interpretation of 
        //    ${eval("`"+this.componentHtmlTemplateString()+"`")} in MyAbstractWebComponent.initComponentInnerHtml()
        customElements.define(componentDef.name, constructor);
    };
}
//# sourceMappingURL=my-component-decorator.js.map