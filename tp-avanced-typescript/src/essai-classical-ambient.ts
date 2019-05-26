/// <reference path = "../lib/d.ts/my-js-lib.d.ts" />

function add_delegating_to_js_lib(x:number, y:number){
    let res= add_js_lib(x,y);
    console.log(prefix_string_js_lib("resulat",res.toString()));
    log_essai_stats();
    return res;
} 

function log_essai_stats(){
   unite='cm';
   var statEntries1 :Entry[] =[ { x:3,y:5} , { x:5,y:7},  { x:7,y:9} ];
   var stats1 :Stat[] = buildStats(statEntries1);
   console.log("statEntries1="+JSON.stringify(statEntries1));
   console.log("stats1="+JSON.stringify(stats1));
   var statEntries2 :Entry[] =[ { x:3} , { x:4},  { x:2} ];
   var stats2 :Stat[] = buildStats(statEntries2);
   console.log("statEntries2="+JSON.stringify(statEntries2));
   console.log("stats2="+JSON.stringify(stats2));
}
