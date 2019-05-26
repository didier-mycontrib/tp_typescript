declare function add_js_lib(a:number,b:number):number;
declare function prefix_string_js_lib(prefix:string,str:string):string;

//-----------------------------

interface Entry{
    x:number;
    y?:number;
    z?:number;
}


interface Stat {
    label: string;
    sum: number | undefined;
    average: number | undefined;
}
declare type Unite = "mm" | "cm" | "m" | "km" ;
declare var unite : Unite | undefined;

declare function buildStats(entries: Array<Entry>):Array<Stat>