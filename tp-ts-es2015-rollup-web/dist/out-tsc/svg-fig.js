import { Line, Circle, Rectangle } from './fig';
import { SvgInCanvasVisitor } from './canvas-visitor';
export function my_ts_test() {
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
export default my_ts_test;
//# sourceMappingURL=svg-fig.js.map