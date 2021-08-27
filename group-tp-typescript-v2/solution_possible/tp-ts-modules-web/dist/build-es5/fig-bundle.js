var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    'use strict';
    var CanvasVisitor = /** @class */ (function () {
        function CanvasVisitor(canvasId) {
            this.canvasId = canvasId;
            this._canvasElement = null;
            this._ctx = null; //2d  context in html5 canvas
            this._canvasElement = document.getElementById(canvasId);
            this._ctx = this._canvasElement.getContext("2d");
        }
        CanvasVisitor.prototype.doActionForCircle = function (c) {
            this._ctx.beginPath();
            this._ctx.arc(c.xC, c.yC, c.r, 0, 2 * Math.PI, false);
            if (c.fillColor != null) {
                this._ctx.fillStyle = c.fillColor;
                this._ctx.fill();
            }
            this._ctx.lineWidth = c.lineWidth;
            this._ctx.strokeStyle = c.lineColor; //'#003300';
            this._ctx.stroke();
        };
        CanvasVisitor.prototype.doActionForLine = function (l) {
            this._ctx.beginPath();
            this._ctx.moveTo(l.x1, l.y1);
            this._ctx.lineTo(l.x2, l.y2);
            this._ctx.strokeStyle = l.lineColor;
            this._ctx.lineWidth = l.lineWidth;
            this._ctx.stroke();
        };
        CanvasVisitor.prototype.doActionForRectangle = function (r) {
            this._ctx.beginPath();
            this._ctx.rect(r.x1, r.y1, r.width, r.height);
            if (r.fillColor != null) {
                this._ctx.fillStyle = r.fillColor;
                this._ctx.fill();
            }
            this._ctx.strokeStyle = r.lineColor;
            this._ctx.lineWidth = r.lineWidth;
            this._ctx.stroke();
        };
        return CanvasVisitor;
    }());
    var ConsoleJsonVisitor = /** @class */ (function () {
        function ConsoleJsonVisitor() {
        }
        ConsoleJsonVisitor.prototype.doActionForCircle = function (c) {
            console.log("{circle: " + JSON.stringify(c) + "}");
        };
        ConsoleJsonVisitor.prototype.doActionForLine = function (l) {
            console.log("{line: " + JSON.stringify(l) + "}");
        };
        ConsoleJsonVisitor.prototype.doActionForRectangle = function (r) {
            console.log("{rectangle:" + JSON.stringify(r) + "}");
        };
        return ConsoleJsonVisitor;
    }());
    var Fig2D = /** @class */ (function () {
        function Fig2D(lineColor, lineWidth, fillColor) {
            if (lineColor === void 0) { lineColor = "black"; }
            if (lineWidth === void 0) { lineWidth = 1; }
            if (fillColor === void 0) { fillColor = undefined; }
            this.lineColor = lineColor;
            this.lineWidth = lineWidth;
            this.fillColor = fillColor;
        }
        return Fig2D;
    }());
    var Line = /** @class */ (function (_super) {
        __extends(Line, _super);
        function Line(x1, y1, x2, y2, lineColor, lineWidth) {
            if (x1 === void 0) { x1 = 0; }
            if (y1 === void 0) { y1 = 0; }
            if (x2 === void 0) { x2 = 0; }
            if (y2 === void 0) { y2 = 0; }
            if (lineColor === void 0) { lineColor = "black"; }
            if (lineWidth === void 0) { lineWidth = 1; }
            var _this = _super.call(this, lineColor, lineWidth) || this;
            _this.x1 = x1;
            _this.y1 = y1;
            _this.x2 = x2;
            _this.y2 = y2;
            return _this;
        }
        Line.prototype.performVisit = function (visitor) {
            visitor.doActionForLine(this);
        };
        return Line;
    }(Fig2D));
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(xC, yC, r, lineColor, lineWidth, fillColor) {
            if (xC === void 0) { xC = 0; }
            if (yC === void 0) { yC = 0; }
            if (r === void 0) { r = 0; }
            if (lineColor === void 0) { lineColor = "black"; }
            if (lineWidth === void 0) { lineWidth = 1; }
            if (fillColor === void 0) { fillColor = undefined; }
            var _this = _super.call(this, lineColor, lineWidth, fillColor) || this;
            _this.xC = xC;
            _this.yC = yC;
            _this.r = r;
            return _this;
        }
        Circle.prototype.performVisit = function (visitor) {
            visitor.doActionForCircle(this);
        };
        return Circle;
    }(Fig2D));
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(x1, y1, width, height, lineColor, lineWidth, fillColor) {
            if (x1 === void 0) { x1 = 0; }
            if (y1 === void 0) { y1 = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (lineColor === void 0) { lineColor = "black"; }
            if (lineWidth === void 0) { lineWidth = 1; }
            if (fillColor === void 0) { fillColor = undefined; }
            var _this = _super.call(this, lineColor, lineWidth, fillColor) || this;
            _this.x1 = x1;
            _this.y1 = y1;
            _this.width = width;
            _this.height = height;
            return _this;
        }
        Rectangle.prototype.performVisit = function (visitor) {
            visitor.doActionForRectangle(this);
        };
        return Rectangle;
    }(Fig2D));
    function my_ts_test() {
        var tabFig = new Array();
        tabFig.push(new Line(20, 20, 180, 200, "red"));
        tabFig.push(new Circle(100, 100, 50, "blue"));
        tabFig.push(new Circle(250, 200, 50, "black", 1, "blue"));
        tabFig.push(new Rectangle(200, 100, 50, 60, "green"));
        tabFig.push(new Rectangle(20, 100, 50, 60, "black", 1, "green"));
        var consoleVisitor = new ConsoleJsonVisitor();
        for (var _i = 0, tabFig_1 = tabFig; _i < tabFig_1.length; _i++) {
            var f = tabFig_1[_i];
            f.performVisit(consoleVisitor);
        }
        var canvasVisitor = new CanvasVisitor("myCanvas");
        //for(let index in tabFig) { ... }
        for (var _a = 0, tabFig_2 = tabFig; _a < tabFig_2.length; _a++) {
            var f = tabFig_2[_a];
            f.performVisit(canvasVisitor);
        }
    }
    var lastXc = null;
    var lastYc = null;
    window.addEventListener("load", function () {
        var btnClearElement = document.querySelector('#btnClear');
        if (btnClearElement)
            btnClearElement.addEventListener('click', function () {
                console.log("clear");
                clear_canvas();
            });
        var btnTestElement = document.querySelector('#btnTest');
        if (btnTestElement)
            btnTestElement.addEventListener('click', function () {
                console.log("test");
                my_ts_test();
            });
        var canvasElement = document.querySelector('#myCanvas');
        if (canvasElement)
            canvasElement.addEventListener('click', function (evt) {
                log_coords(evt);
            });
    });
    function clear_canvas() {
        var canvasElement = document.getElementById("myCanvas");
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
        var spanMsgElement = document.querySelector('#spanMsg');
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
