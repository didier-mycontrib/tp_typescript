"use strict";
/*import { Circle, FigVisitor, Line, Rectangle } from "./fig";*/
/*export*/ var ConsoleJsonVisitor = /** @class */ (function () {
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
//# sourceMappingURL=console-fig-visitor.js.map