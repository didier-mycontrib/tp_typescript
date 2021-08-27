import { my_ts_test } from "./fig-test";

var lastXc : number | null = null;
var lastYc : number | null = null;

 window.addEventListener("load", function(){

	let btnClearElement : HTMLElement | null = document.querySelector('#btnClear');
	if(btnClearElement)
	  btnClearElement.addEventListener('click',function(){
		 console.log("clear");
		 clear_canvas();
	 });
	 
	let btnTestElement : HTMLElement | null = document.querySelector('#btnTest');
	if(btnTestElement)
	btnTestElement.addEventListener('click',function(){
		console.log("test");
		my_ts_test();
	});

	let canvasElement : HTMLElement | null = document.querySelector('#myCanvas');
	if(canvasElement)
	canvasElement.addEventListener('click',function(evt){
		log_coords(evt);
	 });


 });



	function clear_canvas(){
		let canvasElement : HTMLCanvasElement | null = document.getElementById("myCanvas") as HTMLCanvasElement | null;
		if(canvasElement){
			var ctx : CanvasRenderingContext2D | null = canvasElement.getContext("2d");
			if(ctx){
				ctx.clearRect ( 0 , 0 , canvasElement.width, canvasElement.height );
				lastXc=null; lastYc=null;//reset last coord for next line
			}
		}
	}

	function log_coords(evt : MouseEvent){
		var canvasElement :any = document.getElementById("myCanvas");
		var xC = evt.pageX - canvasElement.offsetLeft; //xC = x relative to canvas
		var yC = evt.pageY - canvasElement.offsetTop; //yC = relative to canvas
		var msg="click at x=" + xC + " y=" + yC;
		console.log(msg);
		let spanMsgElement : HTMLElement | null = document.querySelector('#spanMsg');
		if(spanMsgElement) spanMsgElement.innerHTML=msg;

		var ctx  = canvasElement.getContext("2d");
		if(lastXc == null &&  lastYc == null){
			lastXc=xC; lastYc=yC;
		}
		ctx.beginPath();
		ctx.moveTo(lastXc,lastYc);//from last x,y
		ctx.lineTo(xC,yC);//to new xC,yC

		lastXc=xC; lastYc=yC;//store last coord for next line
		ctx.stroke();
	};

