export class MyAbstractWebComponent extends HTMLElement {
    // attribute change
    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        Reflect.defineProperty(this, property, { value: newValue, writable: true, enumerable: true, configurable: true });
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' }); //only accessible by web component
        //const shadow = this.attachShadow({ mode: 'open' });//acessible outside with Element.shadowRoot
        this.initComponentInnerHtml(shadow);
        this.initComponentBehavior(shadow);
    }
    initComponentInnerHtml(shadow) {
        shadow.innerHTML = `
        <style>
        ${this.componentCssTemplateString()}
        </style>
  
        ${this.componentHtmlTemplateString()}
        `;
    }
    constructor() {
        super();
    }
}
//# sourceMappingURL=my-abstract-web-component.js.map