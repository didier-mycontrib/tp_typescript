
abstract class Fig2D {
  constructor(public lineColor : string = "black",
              public lineWidth : number = 1,
              public fillColor : string = null){
  }
abstract  performVisit(visitor : FigVisitor) : void ;
}

class Line  extends Fig2D{
  constructor(public x1:number = 0 ,  public y1:number = 0 ,
              public x2:number = 0 ,  public y2:number = 0,
              lineColor : string = "black",
              lineWidth : number = 1){
                 super(lineColor,lineWidth);
  }
  performVisit(visitor : FigVisitor) : void {
     visitor.doActionForLine(this);
   }
}

class Circle  extends Fig2D{
  constructor(public xC:number = 0 ,
              public yC:number = 0  ,
              public r:number = 0,
              lineColor : string = "black",
              lineWidth : number = 1,
              fillColor : string = null){
                 super(lineColor,lineWidth,fillColor);
  }
  performVisit(visitor : FigVisitor) : void {
    visitor.doActionForCircle(this);
  }
}

class Rectangle  extends Fig2D{
  constructor(public x1:number = 0 ,
              public y1:number = 0 ,
              public width:number = 0 ,
              public height:number = 0,
              lineColor : string = "black",
              lineWidth : number = 1,
              fillColor : string = null){
                 super(lineColor,lineWidth,fillColor);
  }
  performVisit(visitor : FigVisitor) : void {
    visitor.doActionForRectangle(this);
  }
}

interface FigVisitor {
  doActionForCircle( c : Circle) : void;
  doActionForLine( l : Line) : void;
  doActionForRectangle(r : Rectangle) : void;
}

class CanvasVisitor  implements FigVisitor{
  private _canvasElement : any = null;
  private _ctx : any = null; //2d (svg) context in html5 canvas
  constructor(public canvasId : string){
    this._canvasElement = document.getElementById(canvasId);
    this._ctx = this._canvasElement.getContext("2d");
  }
  doActionForCircle( c : Circle) : void {
     this._ctx.beginPath();
     this._ctx.arc(c.xC, c.yC, c.r, 0, 2 * Math.PI, false);
     if(c.fillColor != null){
         this._ctx.fillStyle = c.fillColor;
        this._ctx.fill();
       }
     this._ctx.lineWidth = c.lineWidth;
     this._ctx.strokeStyle =  c.lineColor;//'#003300';
     this._ctx.stroke();
  }
  doActionForLine( l : Line) : void {
    this._ctx.beginPath();
    this._ctx.moveTo(l.x1,l.y1);
    this._ctx.lineTo(l.x2,l.y2);
    this._ctx.strokeStyle =  l.lineColor;
    this._ctx.lineWidth = l.lineWidth;
    this._ctx.stroke();
  }

  doActionForRectangle( r : Rectangle) : void {
    this._ctx.beginPath();
    this._ctx.rect(r.x1,r.y1,r.width,r.height);
    if(r.fillColor != null){
         this._ctx.fillStyle = r.fillColor;
         this._ctx.fill();
       }
    this._ctx.strokeStyle =  r.lineColor;
    this._ctx.lineWidth = r.lineWidth;
    this._ctx.stroke();
  }
}

function my_ts_test(){
    var tabFig : Fig2D[] = new Array<Fig2D>();
    tabFig.push(new Line(20,20,180,200,"red"));
    tabFig.push(new Circle(100,100,50,"blue"));
    tabFig.push(new Circle(250,200,50,"black",1,"blue"));
    tabFig.push(new Rectangle(200,100,50,60,"green"));
    tabFig.push(new Rectangle(20,100,50,60,"black",1,"green"));
    var svgVisitor = new CanvasVisitor("myCanvas"); 
    //for(let index in tabFig) { ... }
    for( let f  of tabFig){
      f.performVisit(svgVisitor);
    }
}
