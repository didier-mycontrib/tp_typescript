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
export { Fig2D };
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
export { Line };
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
export { Circle };
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
export { Rectangle };
//# sourceMappingURL=fig.js.map