/*
npm install -s node-fetch
npm i --save-dev @types/node-fetch
*/

import fetch , { Response} from "node-fetch";

async function appelWs(){
    try{
        const url ="https://catfact.ninja/fact";
        let response  : Response;
        response= await fetch(url);
        let res = await response.json();
        console.log("res="+ JSON.stringify(res));
    }catch(e){
        console.log("erreur: " + e);
    }
}

appelWs();