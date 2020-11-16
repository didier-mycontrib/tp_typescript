(function () {
    'use strict';

    class Serie {
        constructor(label = "?", values = []) {
            this.label = label;
            this.values = values;
        }
        push(val) { this.values.push(val); }
    }

    const NB_DEFAULT_COLORS = 6;
    var MyGraphType;
    (function (MyGraphType) {
        MyGraphType[MyGraphType["bar"] = 0] = "bar";
        MyGraphType[MyGraphType["line"] = 1] = "line";
        MyGraphType[MyGraphType["pie"] = 2] = "pie";
        MyGraphType[MyGraphType["doughnut"] = 3] = "doughnut";
        MyGraphType[MyGraphType["horizontalBar"] = 4] = "horizontalBar";
    })(MyGraphType || (MyGraphType = {}));
    //tableau des N premières couleurs par défaut ("background"):
    var myGraphDefaultBackgroundColors = [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)'
    ];
    //tableau des N premières couleurs par défaut ("border/foreground"):
    var myGraphDefaultBorderColors = [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ];
    class MySimpleGraph {
        constructor(idCanvasElement, dataSerie, labelSerie) {
            this.idCanvasElement = idCanvasElement;
            this.dataSerie = dataSerie;
            this.labelSerie = labelSerie;
            this.chartType = MyGraphType.pie;
        }
        setTypeChartAsString(strTypeChart) {
            this.chartType = MyGraphType[strTypeChart];
        }
        render() {
            //agrandir si besoin la taille des tableaux des couleurs
            if (this.labelSerie) {
                let n = this.labelSerie.values.length;
                if (n > NB_DEFAULT_COLORS) {
                    for (let i = NB_DEFAULT_COLORS; i < n; i++) {
                        //a peaufiner via petite alteration sur couleurs recopiees
                        myGraphDefaultBackgroundColors[i] = myGraphDefaultBackgroundColors[i % NB_DEFAULT_COLORS];
                        myGraphDefaultBorderColors[i] = myGraphDefaultBorderColors[i % NB_DEFAULT_COLORS];
                    }
                }
            }
            let canvasElement = document.getElementById(this.idCanvasElement);
            let ctx = /*CanvasRenderingContext2D*/ canvasElement.getContext('2d');
            if (MySimpleGraph.chartsMap.has(this.idCanvasElement))
                MySimpleGraph.chartsMap.get(this.idCanvasElement).destroy();
            this.chart = new Chart(ctx, {
                type: MyGraphType[this.chartType],
                data: {
                    labels: this.labelSerie ? this.labelSerie.values : [],
                    datasets: [{
                            /*label: this.labelSerie?this.labelSerie.label:null,*/
                            data: this.dataSerie ? this.dataSerie.values : [],
                            backgroundColor: myGraphDefaultBackgroundColors,
                            borderColor: this.chartType == MyGraphType.line ? 'blue' : myGraphDefaultBorderColors,
                            borderWidth: 1,
                            fill: this.chartType == MyGraphType.line ? false : true
                        }]
                },
                options: {
                    responsive: false,
                    legend: { display: (this.chartType == MyGraphType.pie || this.chartType == MyGraphType.doughnut) ? true : false },
                    title: {
                        display: true,
                        text: this.labelSerie ? this.labelSerie.label : 'chart'
                    },
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                    }
                }
            });
            MySimpleGraph.chartsMap.set(this.idCanvasElement, this.chart);
        } //end of render()
    }
    //chartsMap = Map beetwen idCanvas and chart
    //to destroy old chart before create new one:
    MySimpleGraph.chartsMap = new Map();
    //if responsive:false --> keep original size of canvas in html
    //if responsive:true (default value) --> automatic resize of canvas/chart to width of page (or container ?).

    /// <reference path = "../dist/lib/d.ts/my-js-lib.d.ts" />
    function log_essai_Circle() {
        var c1, c2;
        c1 = new Circle();
        c1.cx = 12.5;
        c1.cy = 45;
        c1.r = 20;
        console.log("c1.perimetre()=" + c1.perimetre());
        c2 = new Circle(25, 30, 10);
        console.log("c2.perimetre()=" + c2.perimetre());
        c2.translate(10, 10);
        console.log("c2=" + JSON.stringify(c2));
        let s;
        s = calculerSurfaceCercle(c2);
        console.log("surface de c2=" + s);
    }

    window.addEventListener("load", function () {
        document.querySelector('#btnRefresh').addEventListener('click', function () {
            let eltSelTypeChart = document.querySelector('#selTypeChart');
            let strTypeChart = eltSelTypeChart.value;
            console.log("strTypeChart:" + strTypeChart);
            let eltListeValeurs = document.querySelector('#txtListeValeurs');
            let tabVal = eltListeValeurs.value.split(',');
            for (let i in tabVal)
                tabVal[i] = Number(tabVal[i]);
            console.log("tabVal:" + JSON.stringify(tabVal)); //[23,16,18,8,5]
            let sVal = new Serie("s1", tabVal);
            let eltListePays = document.querySelector('#txtListePays');
            let tabPays = eltListePays.value.split(',');
            console.log("tabPays:" + JSON.stringify(tabPays)); //["France","Allemagne","Italie","Espagne","Belgique"]
            let sLabel = new Serie("pays", tabPays);
            let myGraph = new MySimpleGraph("myCanvas", sVal, sLabel);
            myGraph.setTypeChartAsString(strTypeChart);
            myGraph.render();
            log_essai_Circle();
        });
    });

}());
