var SvgGenVisitor = /** @class */ (function () {
    function SvgGenVisitor() {
        this._svgHeader =
            '<svg width="500" height="400" '
                + ' xmlns="http://www.w3.org/2000/svg">';
        this._svgContent = "";
    }
    SvgGenVisitor.prototype.getAllSvgFileContent = function () {
        return this._svgHeader + this._svgContent
            + "</svg>";
    };
    SvgGenVisitor.prototype.doActionForCircle = function (c) {
        this._svgContent += ' <circle cx="' + c.xC + '" cy="' + c.yC
            + '" r="' + c.r + '" stroke="' + c.lineColor
            + '" stroke-width="' + c.lineWidth
            + '" fill="' + c.fillColor + '" />';
    };
    SvgGenVisitor.prototype.doActionForLine = function (l) {
        this._svgContent += ' <line x1="' + l.x1
            + '" y1="' + l.y1
            + '" x2="' + l.x2
            + '" y2="' + l.y2 +
            '" style="stroke:' + l.lineColor
            + ';stroke-width:' + l.lineWidth + '" />';
    };
    SvgGenVisitor.prototype.doActionForRectangle = function (r) {
        this._svgContent += ' <rect x="' + r.x1 + '" y="' + r.y1 +
            '" width="' + r.width +
            '" height="' + r.height +
            '" style="fill:' + r.fillColor +
            ';stroke-width:' + r.lineWidth +
            ';stroke:' + r.lineColor + '" />';
    };
    return SvgGenVisitor;
}());
export { SvgGenVisitor };
//# sourceMappingURL=svg-visitor.js.map