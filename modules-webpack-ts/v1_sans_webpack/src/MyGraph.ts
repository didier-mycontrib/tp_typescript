
//declare function Chart(...args:any): any; //ok only with "strict" = false

interface Chart{
    //any/unknown exact content
}

interface ChartDefinition{
    type?:string;
    data?:object;
    options?:object;
}
    
declare var Chart: {
    prototype: Chart;
    new(ctx?:CanvasRenderingContext2D | string , chartDefinition? : ChartDefinition ): Chart;
};

//import { Chart , ChartColor } from 'chart.js'; //with npm i --save-dev @types/chart.js
//import  { Chart } from 'chart.js'; //with npm i --save-dev @types/chart.js
//import Chart , { ChartTypeRegistry} from 'chart.js/auto';
//import { Serie } from './Serie';

const NB_DEFAULT_COLORS=6;

enum MyGraphType { bar , line , pie , doughnut , polarArea , radar };
//NB: key of MyGraphType are the sames of key of ChartTypeRegistry of chart.js 

//tableau des N premières couleurs par défaut ("background"):
var myGraphDefaultBackgroundColors: Array<string> = [
    'rgba(255, 99, 132, 0.8)',
    'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)',
    'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)',
    'rgba(255, 159, 64, 0.8)'
]
//tableau des N premières couleurs par défaut ("border/foreground"):
var myGraphDefaultBorderColors : Array<string>= [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
]

class MySimpleGraph {
    private ctx : CanvasRenderingContext2D | string = "null";
    //chartsMap = Map beetwen idCanvas and chart
    //to destroy old chart before create new one:
    private static chartsMap = new Map();
    private chart : any;
    public chartType : MyGraphType = MyGraphType.pie; 
    constructor(public idCanvasElement:string|undefined,
                public dataSerie:Serie<number>|undefined,
                public labelSerie:Serie<string>|undefined){
    }

    public setTypeChartAsString(strTypeChart:string){
        this.chartType=MyGraphType[strTypeChart as keyof (typeof MyGraphType)];
    }


    render():void{
        
        //agrandir si besoin la taille des tableaux des couleurs
        if(this.labelSerie){
            let n = this.labelSerie.values.length;
            if(n>NB_DEFAULT_COLORS){
                for(let i=NB_DEFAULT_COLORS;i<n;i++){
                    //a peaufiner via petite alteration sur couleurs recopiees
                    myGraphDefaultBackgroundColors[i]=myGraphDefaultBackgroundColors[i%NB_DEFAULT_COLORS];
                    myGraphDefaultBorderColors[i]=myGraphDefaultBorderColors[i%NB_DEFAULT_COLORS];
                }
            }
        }

        let canvasElement :  HTMLCanvasElement | null
          =<HTMLCanvasElement> document.getElementById(this.idCanvasElement || "?");
        this.ctx = canvasElement.getContext('2d') || "null";
        if(MySimpleGraph.chartsMap.has(this.idCanvasElement)) 
                 MySimpleGraph.chartsMap.get(this.idCanvasElement).destroy(); 


      
        this.chart =   new  Chart(this.ctx, {
            type: MyGraphType[this.chartType],
            data: {
                labels: this.labelSerie?this.labelSerie.values:[],
                datasets: [{
                    label: this.labelSerie?this.labelSerie.label:undefined,
                    data: this.dataSerie?this.dataSerie.values:[],
                    backgroundColor:  myGraphDefaultBackgroundColors,
                    borderColor: (this.chartType==MyGraphType.line)?'blue':myGraphDefaultBorderColors ,
                    borderWidth: 1,
                    fill : this.chartType==MyGraphType.line?false:true
                }]
            },
            options: {
                responsive:false,
                plugins : {
                     legend : { 
                            display : (this.chartType==MyGraphType.pie || this.chartType==MyGraphType.doughnut)?true:false
                        },
                    title:{
                            display:true,
                            text : this.labelSerie?this.labelSerie.label:'chart'
                          }
                },
                scales: {
                    y: {   beginAtZero:true }
                }
            }
        });
        MySimpleGraph.chartsMap.set(this.idCanvasElement,this.chart);
    }//end of render()

}

//if responsive:false --> keep original size of canvas in html
//if responsive:true (default value) --> automatic resize of canvas/chart to width of page (or container ?).