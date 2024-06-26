/*
npm install -s node-fetch
npm i --save-dev @types/node-fetch
*/
/*
fetch , axios , XMLHttpRequest , jQuery , RxJs  ...
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
function appelWsV2() {
    const url = "https://catfact.ninja/fact";
    myFetch(url)
        .then((catFact) => {
        console.log("cat_fact=" + catFact.fact);
    })
        .catch((e) => { console.log("erreur: " + e); });
}
//appelWs();
appelWsV2();
//# sourceMappingURL=appelWs.js.map