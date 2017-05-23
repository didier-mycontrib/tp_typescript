
import { Fig2D , Line, Circle, Rectangle } from './fig' ;
import { SvgInCanvasVisitor } from './canvas-visitor' ;


function my_ts_test(){
    var tabFig : Fig2D[] = new Array<Fig2D>();
    tabFig.push(new Line(20,20,180,200,"red"));
    tabFig.push(new Circle(100,100,50,"blue"));
    tabFig.push(new Circle(250,200,50,"black",1,"blue"));
    tabFig.push(new Rectangle(200,100,50,60,"green"));
    tabFig.push(new Rectangle(20,100,50,60,"black",1,"green"));
    var svgVisitor = new SvgInCanvasVisitor("myCanvas");
    //for(let index in tabFig) { ... }
    try{
    for( let f  of tabFig){
      f.performVisit(svgVisitor);
    }
  } catch(ex){
    console.log("loading ...");
  }

}

export default my_ts_test;
