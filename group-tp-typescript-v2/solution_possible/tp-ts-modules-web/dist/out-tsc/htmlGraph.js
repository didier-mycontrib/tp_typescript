import { Serie } from './Serie';
import { MySimpleGraph } from './MyGraph';
window.addEventListener("load", function () {
    let btnElement = document.querySelector('#btnRefresh');
    if (btnElement)
        btnElement.addEventListener('click', function () {
            let eltSelTypeChart = document.querySelector('#selTypeChart');
            let strTypeChart = eltSelTypeChart ? eltSelTypeChart.value : 'pie';
            console.log("strTypeChart:" + strTypeChart);
            let eltListeValeurs = document.querySelector('#txtListeValeurs');
            let tabVal = eltListeValeurs ? eltListeValeurs.value.split(',') : [];
            for (let i in tabVal)
                tabVal[i] = Number(tabVal[i]);
            console.log("tabVal:" + JSON.stringify(tabVal)); //[23,16,18,8,5]
            let sVal = new Serie("s1", tabVal);
            let eltListePays = document.querySelector('#txtListePays');
            let tabPays = eltListePays ? eltListePays.value.split(',') : [];
            console.log("tabPays:" + JSON.stringify(tabPays)); //["France","Allemagne","Italie","Espagne","Belgique"]
            let sLabel = new Serie("pays", tabPays);
            let myGraph = new MySimpleGraph("myCanvas", sVal, sLabel);
            myGraph.setTypeChartAsString(strTypeChart);
            myGraph.render();
        });
});
//# sourceMappingURL=htmlGraph.js.map