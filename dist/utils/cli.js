"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const doblar_memoize_1 = require("../controllers/doblar-memoize");
function doblar(x) {
    console.log(x * 2);
    return x * 2;
}
const program = new commander_1.Command;
program
    .version("1.0.0")
    .description("Calcula el doble de un número x");
program
    .option("-x, --numero <x>", "Número para calcular su doble")
    .action((options) => {
    const x = parseFloat(options.numero);
    if (!isNaN(x)) {
        const memoizedDoblar = (0, doblar_memoize_1.memoize)(doblar);
        for (let i = 0; i < 10; i++) {
            const resultado = memoizedDoblar(x);
            console.log(`El doble de ${x} es ${resultado}`);
        }
    }
    else {
        console.error("Ingresa un número válido como argumento.");
    }
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map