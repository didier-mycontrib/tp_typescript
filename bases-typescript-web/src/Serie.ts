class Serie<T> {
    constructor(public label : string ="?",
                public values : Array<T>=[]){
                }
    push(val:T){this.values.push(val);}
}

interface Stat{
    size:number;
    average:number;
    sum:number;
    ecartType? :number;
}

interface StatBuilder {
    buildStat(withEcartType:boolean):Stat;
}

interface WithStats extends StatBuilder {
     size() : number;
     average():number;
     sum():number;
     ecartType():number;
}

class StatComputer implements WithStats {

    constructor(public values : Array<number>=[]){
    }
    size(): number {
        return this.values.length;
    }    
    
    average(): number {
        return this.sum()/this.size();
    }

    sum(): number {
        let s=0;
        for(let i=0;i<this.values.length;i++){
            s+=this.values[i];
        }
        return s;
    }

    ecartType(): number {
        let sce=0;
        let a = this.average();
        for(let i=0;i<this.values.length;i++){
            sce+= Math.pow(this.values[i]-a,2);
        }
        return Math.sqrt(sce)/this.size();
    }

    buildStat(withEcartType:boolean=false):Stat {
        return {
            size : this.size(),
            sum : this.sum(),
            average : this.average(),
            ecartType : withEcartType?this.ecartType():undefined
        }
    }
}

class StatSerie extends Serie<number> implements StatBuilder  {
    private statComputer : WithStats;
    constructor(label : string ="?",
               values : Array<number>=[]){
        super(label,values);
        this.statComputer=new StatComputer(values);
    }
    get size(): number { return this.statComputer.size();   }    
    get average(): number {return this.statComputer.average();   }    
    get sum(): number {return this.statComputer.sum();   }    
    get ecartType(): number {return this.statComputer.ecartType();   }    
    buildStat(withEcartType:boolean=false):Stat {return this.statComputer.buildStat(withEcartType);   }  
}

function test_serie(){
let s1 = new StatSerie("s1"); s1.push(3); s1.push(5.0); s1.push(7.0);
console.log(JSON.stringify(s1));
/*
console.log("s1.size()="+s1.size());
console.log("s1.sum()="+s1.sum());
console.log("s1.average()="+s1.average());
*/
console.log("s1.buildStat()="+JSON.stringify(s1.buildStat(true)));
console.log("s1.ecartType()="+s1.ecartType);
}
//test_serie();