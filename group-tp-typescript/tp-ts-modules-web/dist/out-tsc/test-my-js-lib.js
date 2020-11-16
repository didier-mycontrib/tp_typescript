/// <reference path = "../dist/lib/d.ts/my-js-lib.d.ts" />
export function log_essai_Circle() {
    var c1, c2;
    c1 = new Circle();
    c1.cx = 12.5;
    c1.cy = 45;
    c1.r = 20;
    console.log("c1.perimetre()=" + c1.perimetre());
    c2 = new Circle(23, 34, 34);
    console.log("c2.perimetre()=" + c2.perimetre());
    c2.translate(10, 10);
    console.log("c2=" + JSON.stringify(c2));
    let s;
    s = calculerSurfaceCercle(c2);
    console.log("surface de c2=" + s);
}
//# sourceMappingURL=test-my-js-lib.js.map