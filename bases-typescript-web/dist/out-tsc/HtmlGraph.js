window.addEventListener("load", function () {
    document.querySelector('#btnRefresh').addEventListener('click', function () {
        var eltSelTypeChart = document.querySelector('#selTypeChart');
        var strTypeChart = eltSelTypeChart.value;
        console.log("strTypeChart:" + strTypeChart);
        var eltListeValeurs = document.querySelector('#txtListeValeurs');
        var tabVal = eltListeValeurs.value.split(',');
        for (var i in tabVal)
            tabVal[i] = Number(tabVal[i]);
        console.log("tabVal:" + JSON.stringify(tabVal)); //[23,16,18,8,5]
        var sVal = new StatSerie("s1", tabVal);
        var eltListePays = document.querySelector('#txtListePays');
        var tabPays = eltListePays.value.split(',');
        console.log("tabPays:" + JSON.stringify(tabPays)); //["France","Allemagne","Italie","Espagne","Belgique"]
        var sLabel = new Serie("pays", tabPays);
        var myGraph = new MySimpleGraph("myCanvas", sVal, sLabel);
        myGraph.setTypeChartAsString(strTypeChart);
        myGraph.render();
    });
});
//# sourceMappingURL=HtmlGraph.js.map