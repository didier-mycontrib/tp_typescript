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
  
        ${eval("`"+this.componentHtmlTemplateString()+"`")}
        `
        //NB: ${eval("`"+this.componentHtmlTemplateString()+"`")}
        //in order to interpert #{...} replaced by ${...} in this.componentHtmlTemplateString()

        //console.log("shadow.innerHTML ="+shadow.innerHTML);
    }

    
    //this method can be override in subclass 
    //(directly by code or indirectly by @customComponent( { ... , styles : `...`}))
    componentCssTemplateString():string{
        return  ""; //default empty css
    }

    //this method can be override in subclass 
    //(directly by code or indirectly by @customComponent( { ... , template : `...`}))
    componentHtmlTemplateString():string{
        return "<div>myDefaultComponentHtmlContent</div>";
    }
    abstract initComponentBehavior(shadow:ShadowRoot):void;

    constructor(){
        super();
    }
}
