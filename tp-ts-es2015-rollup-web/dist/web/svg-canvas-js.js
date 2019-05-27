
/*
 $("#spanMsg").html("...");
 $('#txtXyz').val(xyz);
*/


var lastXc = null;
var lastYc = null;

 $(function() {

	 $('#btnClear').on('click',function(){
		 //alert("clear");
		 console.log("clear");
		 clear_canvas();
	 });

	 $('#btnTest').on('click',function(){
		console.log("test");
		//my_ts_test(); //without module
        //myapp['default']();//  myapp(); //with myapp module and default export
		myapp.my_ts_test(); //with my app module and exported my_ts_test();
	});

	 $('#myCanvas').on('click',function(evt){
	 /*
		var rapport_evt = "evt.type=" + evt.type
					 + " and evt.which=" + evt.which+" on #" + evt.target.id;
		console.log("ckick in myCanvas : " + rapport_evt  );
		*/
		log_coords(evt);
	 });


 });



	function clear_canvas(){
		var canvasElement = document.getElementById("myCanvas");
		var ctx = canvasElement.getContext("2d");
        ctx.clearRect ( 0 , 0 , canvasElement.width, canvasElement.height );
		lastXc=null; lastYc=null;//reset last coord for next line
	}

	function log_coords(evt){
		var canvasElement = document.getElementById("myCanvas");
		var xC = evt.pageX - canvasElement.offsetLeft; //xC = x relative to canvas
		var yC = evt.pageY - canvasElement.offsetTop; //yC = relative to canvas
		var msg="click at x=" + xC + " y=" + yC;
		console.log(msg);
	  $("#spanMsg").html(msg);

		var ctx = canvasElement.getContext("2d");
		if(lastXc == null &&  lastYc == null){
			lastXc=xC; lastYc=yC;
		}
		ctx.beginPath();
		ctx.moveTo(lastXc,lastYc);//from last x,y
		ctx.lineTo(xC,yC);//to new xC,yC
		ctx.closePath();

		lastXc=xC; lastYc=yC;//store last coord for next line
		ctx.stroke();
	};
