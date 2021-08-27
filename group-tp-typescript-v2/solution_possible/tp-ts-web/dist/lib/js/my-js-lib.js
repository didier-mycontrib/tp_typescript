
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

