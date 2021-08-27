"use strict";
/*
import { CanvasVisitor } from "./canvas-fig-visitor.js";
import { ConsoleJsonVisitor } from "./console-fig-visitor.js";
import { Circle, Fig2D, Line, Rectangle } from "./fig.js";
*/
/*export*/ function my_ts_test() {
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
//# sourceMappingURL=fig-test.js.map