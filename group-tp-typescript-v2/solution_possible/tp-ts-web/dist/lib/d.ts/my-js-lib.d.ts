//maintenant complété en Tp
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