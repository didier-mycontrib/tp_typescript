import fig = require('./fig');
import svg = require('./svg-visitor');

function my_svg_gen_in_console(){
    var tabFig : fig.Fig2D[] = new Array<fig.Fig2D>();
    tabFig.push(new fig.Line(20,20,180,200,"red"));
    tabFig.push(new fig.Circle(100,100,50,"blue"));
    tabFig.push(new fig.Circle(250,200,50,"black",1,"blue"));
    tabFig.push(new fig.Rectangle(200,100,50,60,"green"));
    tabFig.push(new fig.Rectangle(20,100,50,60,"black",1,"green"));
    var svgVisitor = new svg.SvgGenVisitor();
    //for(let index in tabFig) { ... }
    for( let f  of tabFig){
      f.performVisit(svgVisitor);
    }
    // avec redirection externe de type
    // node dist/out-tsc/main.js 2>err.txt > figures.svg
    // pour générer un fichier ".svg" pret à être afficher
    // par un navigateur
    console.log(svgVisitor.getAllSvgFileContent());
}

my_svg_gen_in_console();
