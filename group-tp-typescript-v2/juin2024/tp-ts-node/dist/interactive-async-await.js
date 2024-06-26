"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveComputer = void 0;
//NB:  process.stdin n'est reconnu ici par typescript 
//que si dépendance "@types/node": "^14.11.2" dans package.json
var stdin = process.stdin;
var stdout = process.stdout;
class InteractiveComputer {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    static ask_(question) {
        return new Promise((resolve, reject) => {
            stdin.resume();
            stdout.write(question + ": ");
            stdin.once('data', function (data) {
                let dataAsString = data.toString().trim();
                if (dataAsString == "fin")
                    reject("end/reject");
                else
                    resolve(dataAsString);
            });
        });
    }
    /*
    static async ask_(question : string)  {
        stdin.once('data', function(data : Buffer) {
            let dataAsString = data.toString().trim();
            if(dataAsString=="fin")
               throw  "end/reject";
            else
               return dataAsString;
        });
    }
    //ne fonctionne pas bien .
    */
    async ask_and_compute_x_plus_y() {
        try {
            let valX = await InteractiveComputer.ask_("x");
            this.x = Number(valX);
            let valY = await InteractiveComputer.ask_("y");
            this.y = Number(valY);
            let res = this.x + this.y;
            console.log("(x+y)=" + res);
            return res;
        }
        catch (e) {
            console.log(e);
            throw new Error("xPlusY-error:" + e);
        }
    }
    async ask_and_compute_x_plus_y_fois_z() {
        try {
            let xPlusY = await this.ask_and_compute_x_plus_y();
            let valZ = await InteractiveComputer.ask_("z");
            this.z = Number(valZ);
            let res = xPlusY * this.z;
            console.log("(x+y)*z=" + res);
            process.exit();
        }
        catch (err) {
            console.log(err);
            process.exit();
        }
    }
}
exports.InteractiveComputer = InteractiveComputer;
//petit test:
let interactiveComputer = new InteractiveComputer();
interactiveComputer.ask_and_compute_x_plus_y_fois_z();
//# sourceMappingURL=interactive-async-await.js.map