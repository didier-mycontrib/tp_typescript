"use strict";
/*
import { Serie } from './Serie';
import { MySimpleGraph } from './MyGraph';
*/
window.addEventListener("load", function () {
    var _a;
    (_a = document.querySelector('#btnRefresh')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        let eltSelTypeChart = document.querySelector('#selTypeChart');
        let strTypeChart = (eltSelTypeChart === null || eltSelTypeChart === void 0 ? void 0 : eltSelTypeChart.value) || "pie";
        console.log("strTypeChart:" + strTypeChart);
        let eltListeValeurs = document.querySelector('#txtListeValeurs');
        let tabVal = (eltListeValeurs === null || eltListeValeurs === void 0 ? void 0 : eltListeValeurs.value.split(',')) || [];
        for (let i in tabVal)
            tabVal[i] = Number(tabVal[i]);
        console.log("tabVal:" + JSON.stringify(tabVal)); //[23,16,18,8,5]
        let sVal = new Serie("s1", tabVal);
        let eltListePays = document.querySelector('#txtListePays');
        let tabPays = (eltListePays === null || eltListePays === void 0 ? void 0 : eltListePays.value.split(',')) || [];
        console.log("tabPays:" + JSON.stringify(tabPays)); //["France","Allemagne","Italie","Espagne","Belgique"]
        let sLabel = new Serie("pays", tabPays);
        let myGraph = new MySimpleGraph("myCanvas", sVal, sLabel);
        myGraph.setTypeChartAsString(strTypeChart);
        myGraph.render();
    });
});
//# sourceMappingURL=htmlGraph.js.map