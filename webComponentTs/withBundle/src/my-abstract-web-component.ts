export abstract class  MyAbstractWebComponent extends HTMLElement{
    
    // attribute change
      attributeChangedCallback(property:string, oldValue:any, newValue:any) {
        if (oldValue === newValue) return;
        Reflect.defineProperty(this, property,
             {value: newValue , writable : true, enumerable : true, configurable : true});
      }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'closed' });//only accessible by web component
        //const shadow = this.attachShadow({ mode: 'open' });//acessible outside with Element.shadowRoot
        this.initComponentInnerHtml(shadow);
        this.initComponentBehavior(shadow);
    }

    initComponentInnerHtml(shadow:ShadowRoot):void{
        shadow.innerHTML = `
        <style>
        ${this.componentCssTemplateString()}
        </style>
  
        ${this.componentHtmlTemplateString()}
        `
    }


    abstract componentCssTemplateString():string;
    abstract componentHtmlTemplateString():string;
    abstract initComponentBehavior(shadow:ShadowRoot):void;
    abstract initAttrList(attrList : string[]):void;

    constructor(){
        super();
    }
}
