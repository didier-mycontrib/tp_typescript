"use strict";
window.addEventListener("load", function () {
    var btnElement = document.querySelector('#btnRefresh');
    if (btnElement)
        btnElement.addEventListener('click', function () {
            var eltSelTypeChart = document.querySelector('#selTypeChart');
            var strTypeChart = eltSelTypeChart ? eltSelTypeChart.value : 'pie';
            console.log("strTypeChart:" + strTypeChart);
            var eltListeValeurs = document.querySelector('#txtListeValeurs');
            var tabVal = eltListeValeurs ? eltListeValeurs.value.split(',') : [];
            for (var i in tabVal)
                tabVal[i] = Number(tabVal[i]);
            console.log("tabVal:" + JSON.stringify(tabVal)); //[23,16,18,8,5]
            var sVal = new Serie("s1", tabVal);
            var eltListePays = document.querySelector('#txtListePays');
            var tabPays = eltListePays ? eltListePays.value.split(',') : [];
            console.log("tabPays:" + JSON.stringify(tabPays)); //["France","Allemagne","Italie","Espagne","Belgique"]
            var sLabel = new Serie("pays", tabPays);
            var myGraph = new MySimpleGraph("myCanvas", sVal, sLabel);
            myGraph.setTypeChartAsString(strTypeChart);
            myGraph.render();
        });
});
//# sourceMappingURL=htmlGraph.js.map