//collection of mixins (to use and re-use)

//Type générique de constructeur (de base) à enrichir 
//Type d'un point d'entrée des "mixins":
export type Constructor<T = {}> = new (...args: any[]) => T;


//Mixin ajoutant la fonctionalité "WithSimpleStat":
export function WithSimpleStat<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      getValues() : Array<number>{
        return Reflect.get(this,"values");
      }
      size(): number {
        return this.getValues().length;
    }    
    
    average(): number {
        return this.sum()/this.size();
    }

    sum(): number {
        let s=0;
        for(let i=0;i<this.getValues().length;i++){
            s+=this.getValues()[i];
        }
        return s;
    }
    };
  }


