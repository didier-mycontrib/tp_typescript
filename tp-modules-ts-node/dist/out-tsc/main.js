"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fig_1 = require("./fig");
var svg_visitor_1 = require("./svg-visitor");
function my_svg_gen_in_console() {
    var tabFig = new Array();
    tabFig.push(new fig_1.Line(20, 20, 180, 200, "red"));
    tabFig.push(new fig_1.Circle(100, 100, 50, "blue"));
    tabFig.push(new fig_1.Circle(250, 200, 50, "black", 1, "blue"));
    tabFig.push(new fig_1.Rectangle(200, 100, 50, 60, "green"));
    tabFig.push(new fig_1.Rectangle(20, 100, 50, 60, "black", 1, "green"));
    var svgVisitor = new svg_visitor_1.SvgGenVisitor();
    //for(let index in tabFig) { ... } 
    for (var _i = 0, tabFig_1 = tabFig; _i < tabFig_1.length; _i++) {
        var f = tabFig_1[_i];
        f.performVisit(svgVisitor);
    }
    // avec redirection externe de type
    // node dist/out-tsc/main.js 2>err.txt > figures.svg
    // pour générer un fichier ".svg" pret à être afficher
    // par un navigateur
    console.log(svgVisitor.getAllSvgFileContent());
}
my_svg_gen_in_console();
//# sourceMappingURL=main.js.map