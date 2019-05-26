import { Serie } from "./Serie";
import { Stat , buildStatFromValues } from "./Stats";

function myMainFunction(){
    let serie1 = new Serie("serie1",[2,6,8]);
    serie1.push(4);serie1.push(10);
    console.log(JSON.stringify(serie1));

    let statForSerie1 : Stat;
    statForSerie1 = buildStatFromValues(serie1.values);
    console.log("moyenne ="+statForSerie1.average)
}

myMainFunction();