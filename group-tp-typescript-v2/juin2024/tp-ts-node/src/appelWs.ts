/*
npm install -s node-fetch
npm i --save-dev @types/node-fetch
*/

import fetch , { Response} from "node-fetch";

interface CatFact{
    fact: string;
    length: number;
}

async function myFetch(url: string) : Promise<CatFact>{
    try{
        let response  : Response;
        response= await fetch(url);
        let res : CatFact 
        res = (await response.json()) as CatFact;
        //res =<CatFact> (await response.json());
        return res;
    }catch(e){
        console.log("erreur: " + e);
        throw e;
    }
}

async function appelWs(){
    try{
        const url ="https://catfact.ninja/fact";
        let response  : Response;
        let catFact = await myFetch(url);
        console.log("cat_fact="+ catFact.fact);
    }catch(e){
        console.log("erreur: " + e);
    }
}

appelWs();