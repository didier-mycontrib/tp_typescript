var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myapp = (function (exports) {
    'use strict';
    var Fig2D = /** @class */ (function () {
        function Fig2D(lineColor, lineWidth, fillColor) {
            if (lineColor === void 0) { lineColor = "black"; }
            if (lineWidth === void 0) { lineWidth = 1; }
            if (fillColor === void 0) { fillColor = "white"; }
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
            if (fillColor === void 0) { fillColor = "white"; }
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
            if (fillColor === void 0) { fillColor = "white"; }
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
    var SvgInCanvasVisitor = /** @class */ (function () {
        function SvgInCanvasVisitor(canvasId) {
            this.canvasId = canvasId;
            this._canvasElement = null;
            this._ctx = null;
            this._canvasElement = document.getElementById(canvasId);
            this._ctx = this._canvasElement.getContext("2d");
        }
        SvgInCanvasVisitor.prototype.doActionForCircle = function (c) {
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
        };
        SvgInCanvasVisitor.prototype.doActionForLine = function (l) {
            this._ctx.beginPath();
            this._ctx.moveTo(l.x1, l.y1);
            this._ctx.lineTo(l.x2, l.y2);
            this._ctx.strokeStyle = l.lineColor;
            this._ctx.lineWidth = l.lineWidth;
            this._ctx.closePath();
            this._ctx.stroke();
        };
        SvgInCanvasVisitor.prototype.doActionForRectangle = function (r) {
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
        };
        return SvgInCanvasVisitor;
    }());
    function my_ts_test() {
        var tabFig = new Array();
        tabFig.push(new Line(20, 20, 180, 200, "red"));
        tabFig.push(new Circle(100, 100, 50, "blue"));
        tabFig.push(new Circle(250, 200, 50, "black", 1, "blue"));
        tabFig.push(new Rectangle(200, 100, 50, 60, "green"));
        tabFig.push(new Rectangle(20, 100, 50, 60, "black", 1, "green"));
        var svgVisitor = new SvgInCanvasVisitor("myCanvas");
        try {
            for (var _i = 0, tabFig_1 = tabFig; _i < tabFig_1.length; _i++) {
                var f = tabFig_1[_i];
                f.performVisit(svgVisitor);
            }
        }
        catch (ex) {
            console.log("loading ...");
        }
    }
    exports.my_ts_test = my_ts_test;
    exports.default = my_ts_test;
    return exports;
}({}));
