"use strict";
//import { MySimpleGraph} from './MyGraph';
//import { Serie , StatSerie } from './Serie';
window.addEventListener("load", function () {
    var _a;
    (_a = document.querySelector('#btnRefresh')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var eltSelTypeChart = document.querySelector('#selTypeChart');
        var strTypeChart = (eltSelTypeChart === null || eltSelTypeChart === void 0 ? void 0 : eltSelTypeChart.value) || "pie"; //"pie" by default
        console.log("strTypeChart:" + strTypeChart);
        var eltListeValeurs = document.querySelector('#txtListeValeurs');
        var tabVal = (eltListeValeurs === null || eltListeValeurs === void 0 ? void 0 : eltListeValeurs.value.split(',')) || [];
        for (var i in tabVal)
            tabVal[i] = Number(tabVal[i]);
        console.log("tabVal:" + JSON.stringify(tabVal)); //[23,16,18,8,5]
        var sVal = new StatSerie("s1", tabVal);
        var eltListePays = document.querySelector('#txtListePays');
        var tabPays = (eltListePays === null || eltListePays === void 0 ? void 0 : eltListePays.value.split(',')) || [];
        console.log("tabPays:" + JSON.stringify(tabPays)); //["France","Allemagne","Italie","Espagne","Belgique"]
        var sLabel = new Serie("pays", tabPays);
        var myGraph = new MySimpleGraph("myCanvas", sVal, sLabel);
        myGraph.setTypeChartAsString(strTypeChart);
        myGraph.render();
    });
});
//# sourceMappingURL=HtmlGraph.js.map