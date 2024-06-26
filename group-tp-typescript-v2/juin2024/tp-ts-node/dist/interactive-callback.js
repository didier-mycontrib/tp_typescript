"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractiveComputer = void 0;
//NB:  process.stdin n'est reconnu ici par typescript 
//que si dépendance "@types/node": "^14.11.2" dans package.json
//via npm install --save-dev  @types/node
var stdin = process.stdin;
var stdout = process.stdout;
class InteractiveComputer {
    static ask(question, callback) {
        stdin.resume();
        stdout.write(question + ": ");
        stdin.once('data', function (data) {
            let dataAsString = data.toString().trim();
            callback(dataAsString);
        });
    }
    static ask_and_compute_x_plus_y() {
        //utilisation chaînée avec callbacks imbriquées:
        InteractiveComputer.ask("x", (valX) => {
            var x = Number(valX);
            InteractiveComputer.ask("y", (valY) => {
                var y = Number(valY);
                var res = x + y;
                console.log("res = (x+y)=" + res);
                process.exit();
            });
        });
    }
}
exports.InteractiveComputer = InteractiveComputer;
//petit test:
InteractiveComputer.ask_and_compute_x_plus_y();
//# sourceMappingURL=interactive-callback.js.map