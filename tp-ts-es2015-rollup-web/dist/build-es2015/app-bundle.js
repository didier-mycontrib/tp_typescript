var myapp = (function (exports) {
    'use strict';

    class Fig2D {
        constructor(lineColor = "black", lineWidth = 1, fillColor = "white") {
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
        constructor(xC = 0, yC = 0, r = 0, lineColor = "black", lineWidth = 1, fillColor = "white") {
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
        constructor(x1 = 0, y1 = 0, width = 0, height = 0, lineColor = "black", lineWidth = 1, fillColor = "white") {
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

    class SvgInCanvasVisitor {
        constructor(canvasId) {
            this.canvasId = canvasId;
            this._canvasElement = null;
            this._ctx = null;
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
            this._ctx.strokeStyle = c.lineColor;
            this._ctx.closePath();
            this._ctx.stroke();
        }
        doActionForLine(l) {
            this._ctx.beginPath();
            this._ctx.moveTo(l.x1, l.y1);
            this._ctx.lineTo(l.x2, l.y2);
            this._ctx.strokeStyle = l.lineColor;
            this._ctx.lineWidth = l.lineWidth;
            this._ctx.closePath();
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
            this._ctx.closePath();
            this._ctx.stroke();
        }
    }

    function my_ts_test() {
        var tabFig = new Array();
        tabFig.push(new Line(20, 20, 180, 200, "red"));
        tabFig.push(new Circle(100, 100, 50, "blue"));
        tabFig.push(new Circle(250, 200, 50, "black", 1, "blue"));
        tabFig.push(new Rectangle(200, 100, 50, 60, "green"));
        tabFig.push(new Rectangle(20, 100, 50, 60, "black", 1, "green"));
        var svgVisitor = new SvgInCanvasVisitor("myCanvas");
        try {
            for (let f of tabFig) {
                f.performVisit(svgVisitor);
            }
        }
        catch (ex) {
            console.log("loading ...");
        }
    }

    exports.default = my_ts_test;
    exports.my_ts_test = my_ts_test;

    return exports;

}({}));
