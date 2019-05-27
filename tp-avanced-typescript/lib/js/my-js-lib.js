
function add_js_lib(a,b){
	return a+b;
}

function prefix_string_js_lib (prefix,str){
	return prefix+":"+str;
}

//--------

var unite="m";

/*
exemples:
entries1=[{"x":3,"y":5},{"x":5,"y":7},{"x":7,"y":9}] 
stats1=[{"label":"statX unite=cm","sum":15,"average":5},
        {"label":"statY unite=cm","sum":21,"average":7}]
*/

function Circle(cx,cy,r){
	this.cx=cx;
	this.cy=cy;
	this.r=r;
	this.perimetre = function(){
		return Math.PI * 2 * this.r;
	}
	this.translate=function(dx,dy){
		this.cx = this.cx+ dx;
		this.cy = this.cy + dy;
	}
}

function calculerSurfaceCercle(c){
	return  Math.PI * c.r * c.r;
}

function Line(x1,x2,y1,y2){
	this.x1=x1;
	this.y1=y1;
	this.x2=x2;
	this.y2=y2;
	this.length = function(){
		return Math.sqrt( Math.pow(this.x2 - this.x1,2) + Math.pow(this.y2 - this.y1,2) ) ;
	}
}

function buildStats(entries){
   var sx=0,ax=0,n=0,sy=0,ay=0;
   var withY=false;
   var stats=[];
   for(var i in entries){
	   n++;
	   var vx=entries[i].x;
	   var vy=entries[i].y;
	   sx+=vx;  ax=(vx+ax*(n-1))/(n*1.0);
	   if(vy!=null){
		   withY=true;
		   sy+=vy;  ay=(vy+ay*(n-1))/(n*1.0);
	   }
   }
   stats.push({
	   label:'statX unite='+unite,
	   sum: sx,
	   average:ax
   });
   if(withY){
	stats.push({
		label:'statY unite='+unite,
		sum: sy,
		average:ay
	});
   }
   return stats;
}
