"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const doblar_memoize_1 = require("../controllers/doblar-memoize");
function doblar(x) {
    console.log(x * 2);
    return x * 2;
}
const program = new commander_1.Command;
program.storeOptionsAsProperties(true);
const state = {};
program
    .version("1.0.0")
    .description("Obtendra el doble del valor x múltiples veces inmediatamente a partir de la segunda operación gracias a la función memoize");
program
    .option("-g, --guardar <numero>, Guarda un número x para posteriormente calcular su doble")
    .option("-d, --doblar <veces>, Te devuelvo el doble de la x varias veces")
    .action((options) => {
    if (options.guardar) {
        const x = parseFloat(options.guardar);
        if (!isNaN(x)) {
            state.numero = x;
            console.log(`Número ${x} guardado`);
        }
        else {
            console.error("Ingresa un número válido");
        }
    }
    else if (options.doblar) {
        if (typeof state.numero === 'number') {
            const memoizeDoble = (0, doblar_memoize_1.memoize)(doblar);
            const x = state.numero;
            const numVeces = parseInt(options.doblar);
            if (!isNaN(numVeces)) {
                for (let i = 0; i < numVeces; i++) {
                    const resultado = memoizeDoble(x);
                    console.log(`Doble ${i + 1}El doble de ${x} es ${resultado}.`);
                }
            }
            console.error("Ingresa un número válido para la cantidad de veces.");
        }
        else {
            console.error("No se ha guardado ningún número. Usa '--guardar' primero.");
        }
    }
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map