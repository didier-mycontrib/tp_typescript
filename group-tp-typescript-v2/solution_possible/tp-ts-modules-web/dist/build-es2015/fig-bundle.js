(function () {
    'use strict';

    class CanvasVisitor {
        constructor(canvasId) {
            this.canvasId = canvasId;
            this._canvasElement = null;
            this._ctx = null; //2d  context in html5 canvas
            this._canvasElement = document.getElementById(canvasId);
            this._ctx = this._canvasElement.getContext("2d");
        }
        doActionForCircle(c) {
            this._ctx.beginPath();
            this._ctx.arc(c.xC, c.yC, c.r, 0, 2 * Math.PI, false);
            if (c.fillColor != null) {
                this._ctx.fillStyle = c.fillColor;
                this._ctx.fill();
            }
            this._ctx.lineWidth = c.lineWidth;
            this._ctx.strokeStyle = c.lineColor; //'#003300';
            this._ctx.stroke();
        }
        doActionForLine(l) {
            this._ctx.beginPath();
            this._ctx.moveTo(l.x1, l.y1);
            this._ctx.lineTo(l.x2, l.y2);
            this._ctx.strokeStyle = l.lineColor;
            this._ctx.lineWidth = l.lineWidth;
            this._ctx.stroke();
        }
        doActionForRectangle(r) {
            this._ctx.beginPath();
            this._ctx.rect(r.x1, r.y1, r.width, r.height);
            if (r.fillColor != null) {
                this._ctx.fillStyle = r.fillColor;
                this._ctx.fill();
            }
            this._ctx.strokeStyle = r.lineColor;
            this._ctx.lineWidth = r.lineWidth;
            this._ctx.stroke();
        }
    }

    class ConsoleJsonVisitor {
        doActionForCircle(c) {
            console.log("{circle: " + JSON.stringify(c) + "}");
        }
        doActionForLine(l) {
            console.log("{line: " + JSON.stringify(l) + "}");
        }
        doActionForRectangle(r) {
            console.log("{rectangle:" + JSON.stringify(r) + "}");
        }
    }

    class Fig2D {
        constructor(lineColor = "black", lineWidth = 1, fillColor = undefined) {
            this.lineColor = lineColor;
            this.lineWidth = lineWidth;
            this.fillColor = fillColor;
        }
    }
    class Line extends Fig2D {
        constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0, lineColor = "black", lineWidth = 1) {
            super(lineColor, lineWidth);
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
        performVisit(visitor) {
            visitor.doActionForLine(this);
        }
    }
    class Circle extends Fig2D {
        constructor(xC = 0, yC = 0, r = 0, lineColor = "black", lineWidth = 1, fillColor = undefined) {
            super(lineColor, lineWidth, fillColor);
            this.xC = xC;
            this.yC = yC;
            this.r = r;
        }
        performVisit(visitor) {
            visitor.doActionForCircle(this);
        }
    }
    class Rectangle extends Fig2D {
        constructor(x1 = 0, y1 = 0, width = 0, height = 0, lineColor = "black", lineWidth = 1, fillColor = undefined) {
            super(lineColor, lineWidth, fillColor);
            this.x1 = x1;
            this.y1 = y1;
            this.width = width;
            this.height = height;
        }
        performVisit(visitor) {
            visitor.doActionForRectangle(this);
        }
    }

    function my_ts_test() {
        var tabFig = new Array();
        tabFig.push(new Line(20, 20, 180, 200, "red"));
        tabFig.push(new Circle(100, 100, 50, "blue"));
        tabFig.push(new Circle(250, 200, 50, "black", 1, "blue"));
        tabFig.push(new Rectangle(200, 100, 50, 60, "green"));
        tabFig.push(new Rectangle(20, 100, 50, 60, "black", 1, "green"));
        var consoleVisitor = new ConsoleJsonVisitor();
        for (let f of tabFig) {
            f.performVisit(consoleVisitor);
        }
        var canvasVisitor = new CanvasVisitor("myCanvas");
        //for(let index in tabFig) { ... }
        for (let f of tabFig) {
            f.performVisit(canvasVisitor);
        }
    }

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

}());
