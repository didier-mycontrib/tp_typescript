/// <reference path = "../lib/d.ts/my-js-lib.d.ts" />

function add_delegating_to_js_lib(x:number, y:number){
    let res= add_js_lib(x,y);
    console.log(prefix_string_js_lib("resulat",res.toString()));
    log_essai_stats();
    log_essai_Line();
    log_essai_Circle();
    return res;
} 

function log_essai_stats(){
   unite="cm";
   var statEntries1 :Entry[] =[ { x:3,y:5} , { x:5,y:7},  { x:7,y:9} ];
   var stats1 :Stat[] = buildStats(statEntries1);
   console.log("statEntries1="+JSON.stringify(statEntries1));
   console.log("stats1="+JSON.stringify(stats1));
   var statEntries2 :Entry[] =[ { x:3} , { x:4},  { x:2} ];
   var stats2 :Stat[] = buildStats(statEntries2);
   console.log("statEntries2="+JSON.stringify(statEntries2));
   console.log("stats2="+JSON.stringify(stats2));
}

function log_essai_Line(){
	let l1,l2 : Line;
	l1 = new Line();
	l1.x1=10;
	l1.x2=12;
    l1.y1=20;
    l1.y2=24;
    console.log("l1.length()=" + l1.length());
    l2=new Line(25,30,10,15);
    console.log("l2.length()=" + l2.length());
}

function log_essai_Circle(){
	var c1,c2 : Circle;
	c1 = new Circle();
	c1.cx=12.5;
	c1.cy=45;
	c1.r=20;
    console.log("c1.perimetre()=" + c1.perimetre());
    c2=new Circle(25,30,10);
    console.log("c2.perimetre()=" + c2.perimetre());
    c2.translate(10,10);
    console.log("c2=" + JSON.stringify(c2));
    let s : number;
    s=calculerSurfaceCercle(c2);
    console.log("surface de c2=" + s);
}
