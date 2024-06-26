console.log('essai decorateurs avec option --experimentalDecorators de tsc');
console.log('ou bien "experimentalDecorators": true dans tsconfig.json');


/* de 1 à 3 niveaux de code pour un décorateur:
---------------------------------------

//niveau quelquefois facultatif "decorator factory" pour déclenchement au runtime avec @decoXy(valP1,valP2)
//utile sur décorateur de méthode ( @decoXy() ou bien @decoXy(valP1) ) , 
//inutile sur décorateur de méthode ou de propriété si @decoXy sans paramètre NI PARENTHESE

function decoXy(p1, p2) { 

  //niveau principal/obligatoire "decorateur" (META-PROGRAMMATION) : 
  return function (target [, propertyKey [, descriptor_or_other]]) {
    
    //META-READAPTATION (descriptor, ...) du code qui sera déclenché

     descriptor.value = function(...args: any) {
         returnValue = ....apply(this, args);
    OU BIEN 
    updateProperty = Object.defineProperty(...
    OU BIEN ...
        //niveau facultatif (mais souvent le plus utile): réadaption du code qui sera exécuté
        //...
     }

  }

}
*/



//method decorator:

//decorator factory [to apply it at runtime] 
//when declared with @myLogDecorator or @myLogDecorator(true) above a method
function myLogMethodDecocator(paramMaj:boolean=false) {

  //the decorator (internal):
  return function (target:any, methodNameAspropertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethodFunction= descriptor.value;
    //console.log(">> originalMethodFunction (code)="+originalMethodFunction);
    
   
    descriptor.value = function(...args: any[]) {
      //for methodDecorator , target = prototype object of current object (ex: Cercle.prototype)
      //console.log(">> in myLogDecorator, target (current obj) prototype as json string="+JSON.stringify(target));
      let returnValue = originalMethodFunction.apply(this, args);
     if(paramMaj && typeof returnValue == 'string') {
        returnValue=returnValue.toUpperCase();
      }
      const params = args.map(arg => JSON.stringify(arg)).join();
      console.log(`>>myLogMethodDecocator intercept call of ${methodNameAspropertyKey}(${params})`
                 + ` returnValue is ${returnValue}`);
      return returnValue;
    }
    return descriptor;
  }
}

function myPerfMethodDecocator() {

  //the decorator (internal):
  return function (target:any, methodNameAspropertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethodFunction= descriptor.value;
    //console.log(">> originalMethodFunction (code)="+originalMethodFunction);
    
   
    descriptor.value = function(...args: any[]) {
      //for methodDecorator , target = prototype object of current object (ex: Cercle.prototype)
      //console.log(">> in myLogDecorator, target (current obj) prototype as json string="+JSON.stringify(target));
      let hrTimeAvant = process.hrtime();
      let avant =  hrTimeAvant[0] * 1000000 + hrTimeAvant[1] / 1000 ;//Date.now();//window.performance.now();
      let returnValue = originalMethodFunction.apply(this, args);
      let hrTimeApres = process.hrtime();
      let apres =  hrTimeApres[0] * 1000000 + hrTimeApres[1] / 1000 ;//Date.now();//window.performance.now();
      const params = args.map(arg => JSON.stringify(arg)).join();
      console.log(`>>myPerfDecocator intercept call of ${methodNameAspropertyKey}. execution time= ${apres-avant} micro-secondes`);
      return returnValue;
    }
    return descriptor;
  }
}

//property decorator:

function myLogPropertyDecorator(target: Object, propertyName: string) {
    //target is protype objet of current object
    let value: any; //will be used in subscoped get / set arrow functions
    const updateProperty = Object.defineProperty(
      target,
      propertyName,
      {
          configurable: true,
          enumerable: true,
          get: () => {
              console.log(">>> myLogPropertyDecorator , get value of propertyName="+propertyName + " : " + value );
              if(value && typeof value == 'string')
                return value.toUpperCase();// little adaptation
              else
                return value;
          },
          set: (newValue: number) => {
            console.log(">>> myLogPropertyDecorator , set newValue of propertyName="+propertyName + " : " + newValue );
                  value =  newValue ;
          }
      },
  );
}


function myMinValueDecocator(minValue:number=0) {
   return function (target: Object, propertyName: string) {
  //target is protype objet of current object
  let value: any; //will be used in subscoped get / set arrow functions
  const updateProperty = Object.defineProperty(
    target,
    propertyName,
    {
        configurable: true,
        enumerable: true,
        get: () => {
              return value;
        },
        set: (newValue: number) => {
            if(newValue>=minValue)
                value =  newValue ;
            else {//console.log(`>>myMinValueDecocator: newValue=${newValue} not set for ${propertyName} !!!`)
                 //value=minValue;
                 throw `newValue=${newValue} invalid for ${propertyName} !!!`;
                 }
        }
    },
);
}
}


//class decorator:
function myLogClassDecorator(){
  return function (target: Function) {
  // save a reference to the original constructor
  const originalConstructor = target;
  //originalConstructor.prototype.additionalProperty="abc"; //syntax ok but not a very good practice

  //NB: use mixin in class decorator is not a very good idea (the constructed objet may be too different)

  // the new constructor behaviour
  const c: any = function (...args :any) {
      console.log(`>>> myLogClassDecorator , New: ${originalConstructor['name']} is created`);
      return Reflect.construct(originalConstructor,args)
  }

  // copy prototype so intanceof operator still works
  c.prototype = originalConstructor.prototype;

  // return new constructor (will override original)
  return c;
  }
}

//Autres decorateurs possibles : sur accesseur get ou set ...
//                               sur un paramètre d'une méthode

@myLogClassDecorator()
class Cercle {

  @myLogPropertyDecorator
  public unite:string  = "?";

  @myMinValueDecocator(0)
  public rayon :number;

  constructor(public xC :number =0, public yC :number =0,
              rayon :number =0){
                                this.rayon=rayon;
    }

  @myLogMethodDecocator(true)
  description() : string{
    return "Cercle de centre ("+this.xC+","+this.yC+") et de rayon " + this.rayon;
  }

  traitementLong(){
    let x=2;
    for(let i=0; i < 20000; i++){
      x=Math.sqrt(i);
    }
  }

  @myLogMethodDecocator()
  @myPerfMethodDecocator()
  aire() : number {
    this.traitementLong();
    return Math.PI * this.rayon * this.rayon;
  }

  @myLogMethodDecocator()
  perimetre() : number {
    return Math.PI * this.rayon * this.rayon;
  }

  @myLogMethodDecocator()
  carre(x :number):number{
    return x*x;
  }

  @myLogMethodDecocator()
  addition(a :number, b:number):number{
    return a+b;
  }


}

//Cercle.prototype.unite="m";

let c1=new Cercle(100,80,50);
let descriptionC1= c1.description(); 
console.log("descriptionC1="+descriptionC1);
c1.unite='cm';
console.log("unite de c1="+c1.unite);
let perimetreC1= c1.perimetre(); 
console.log("perimetre de c1 ="+perimetreC1);
let aireC1= c1.aire(); 
console.log("aire de c1 ="+aireC1);
let troisAuCarre=c1.carre(3);
console.log("troisAuCarre ="+troisAuCarre);
let deuxPlusTrois=c1.addition(2,3);
console.log("deuxPlusTrois ="+deuxPlusTrois);
try{
   c1.rayon=-20;
}catch(e){
  console.log("error:"+e);
}
console.log("c1="+c1.description());
