/// <reference path="Forme.ts" />
function afficherFigure(forme) {
    forme.draw();
}
afficherFigure(new n1.Forme()); //ce code se compile bien
//mais plante à l'execution via node testForme.js
//NB: triple slash directives un peu utilisé au début de typescript 
//mais un peu désuet aujourd'hui : de plus en plus remplacé par modules es2015 (export, import)
