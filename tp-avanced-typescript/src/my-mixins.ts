//collection of mixins (to use and re-use)

//Type générique de constructeur (de base) à enrichir 
//Type d'un point d'entrée des "mixins":
export type Constructor<T = {}> = new (...args: any[]) => T;


//Mixin ajoutant la fonctionalité "flotter sur l'eau":
export function Flottant<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      nbFlotteurs : number = 2; //default value=2
      glisser(){
          console.log("glisser sur l'eau avec nbFlotteurs="+this.nbFlotteurs);
      }
    };
  }

//Mixin ajoutant la fonctionalité générique "timestamped":
export function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      timestamp = Date.now(); //default value=now 
      logTimestamp(){
          console.log("object created at timestamp="+this.timestamp);
      }
    };
  }
