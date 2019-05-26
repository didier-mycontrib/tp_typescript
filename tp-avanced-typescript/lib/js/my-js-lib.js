
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
