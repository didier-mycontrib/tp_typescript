/*
npm install -s node-fetch
npm i --save-dev @types/node-fetch
*/

import fetch , { Response} from "node-fetch";

interface CatFact{
    fact: string;
    length: number;
}

async function myFetch<T>(url: string) : Promise<T>{
    try{
        let response  : Response;
        response= await fetch(url);
        let res : T 
        res = (await response.json()) as T;
        //res =<T> (await response.json());
        return res;
    }catch(e){
        console.log("erreur: " + e);
        throw e;
    }
}

async function appelWs(){
    try{
        const url ="https://catfact.ninja/fact";
        let catFact : CatFact = await myFetch<CatFact>(url);
        console.log("cat_fact="+ catFact.fact);
    }catch(e){
        console.log("erreur: " + e);
    }
}

appelWs();