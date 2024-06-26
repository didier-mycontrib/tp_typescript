"use strict";
/*
npm install -s node-fetch
npm i --save-dev @types/node-fetch
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
async function appelWs() {
    try {
        const url = "https://catfact.ninja/fact";
        let response;
        response = await (0, node_fetch_1.default)(url);
        let res = await response.json();
        console.log("res=" + JSON.stringify(res));
    }
    catch (e) {
        console.log("erreur: " + e);
    }
}
appelWs();
//# sourceMappingURL=appelWs.js.map