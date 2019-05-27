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

interface Line{
	x1:number;
	y1:number;
    x2:number;
    y2:number;
	length():number;
}

declare var Line: {
    prototype: Line;
    new(x1?:number,y1?:number,x2?:number,y2?:number): Line;
};

interface Circle{
	cx:number;
	cy:number;
	r:number;
    perimetre():number;
    translate(dx:number,dy:number):void;
}

declare var Circle: {
    prototype: Circle;
    new(cx?:number,cy?:number,r?:number): Circle;
};

declare function calculerSurfaceCercle(c:Circle):number;

