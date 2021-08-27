
//import { Serie } from "./Serie";
//import { buildStatFromValues, Stat } from "./Stats";

import { Serie, testSerie } from "./Serie";
import { buildStatFromValues, Stat, testStats } from "./Stats";

function myMainFunction(){
    console.log("----------myMainFunction -------------")
    let serie1 = new Serie("serie1",[2,6,8]);
    serie1.push(4);serie1.push(10);
    console.log(JSON.stringify(serie1));

    let statForSerie1 : Stat;
    statForSerie1 = buildStatFromValues(serie1.values);
    console.log("moyenne ="+statForSerie1.average)
}

testSerie();
testStats();
myMainFunction();
