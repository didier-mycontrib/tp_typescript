import { my_ts_test } from "./fig-test";
var lastXc = null;
var lastYc = null;
window.addEventListener("load", function () {
    let btnClearElement = document.querySelector('#btnClear');
    if (btnClearElement)
        btnClearElement.addEventListener('click', function () {
            console.log("clear");
            clear_canvas();
        });
    let btnTestElement = document.querySelector('#btnTest');
    if (btnTestElement)
        btnTestElement.addEventListener('click', function () {
            console.log("test");
            my_ts_test();
        });
    let canvasElement = document.querySelector('#myCanvas');
    if (canvasElement)
        canvasElement.addEventListener('click', function (evt) {
            log_coords(evt);
        });
});
function clear_canvas() {
    let canvasElement = document.getElementById("myCanvas");
    if (canvasElement) {
        var ctx = canvasElement.getContext("2d");
        if (ctx) {
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            lastXc = null;
            lastYc = null; //reset last coord for next line
        }
    }
}
function log_coords(evt) {
    var canvasElement = document.getElementById("myCanvas");
    var xC = evt.pageX - canvasElement.offsetLeft; //xC = x relative to canvas
    var yC = evt.pageY - canvasElement.offsetTop; //yC = relative to canvas
    var msg = "click at x=" + xC + " y=" + yC;
    console.log(msg);
    let spanMsgElement = document.querySelector('#spanMsg');
    if (spanMsgElement)
        spanMsgElement.innerHTML = msg;
    var ctx = canvasElement.getContext("2d");
    if (lastXc == null && lastYc == null) {
        lastXc = xC;
        lastYc = yC;
    }
    ctx.beginPath();
    ctx.moveTo(lastXc, lastYc); //from last x,y
    ctx.lineTo(xC, yC); //to new xC,yC
    lastXc = xC;
    lastYc = yC; //store last coord for next line
    ctx.stroke();
}
;
//# sourceMappingURL=fig-canvas.js.map