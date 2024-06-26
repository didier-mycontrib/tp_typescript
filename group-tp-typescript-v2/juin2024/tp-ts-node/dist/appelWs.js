/*
npm install -s node-fetch
npm i --save-dev @types/node-fetch
*/
import fetch from "node-fetch";
async function myFetch(url) {
    try {
        let response;
        response = await fetch(url);
        let res;
        res = (await response.json());
        //res =<T> (await response.json());
        return res;
    }
    catch (e) {
        console.log("erreur: " + e);
        throw e;
    }
}
async function appelWs() {
    try {
        const url = "https://catfact.ninja/fact";
        let catFact = await myFetch(url);
        console.log("cat_fact=" + catFact.fact);
    }
    catch (e) {
        console.log("erreur: " + e);
    }
}
appelWs();
//# sourceMappingURL=appelWs.js.map