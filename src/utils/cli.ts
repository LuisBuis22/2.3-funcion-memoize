import { Command } from "commander"
import { memoize } from "../controllers/doblar-memoize"

function doblar(x: number): number {
  console.log(x * 2);
  return x * 2;
}

const program = new Command;

program
  .version("1.0.0")
  .description("Calcula el doble de un número x");

// Escribir npm start -- -x 5  (por poner un ejemplo, en lugar del 5 puede ir otro número)

program
  .option("-x, --numero <x>", "Número para calcular su doble")
  .action((options) => {
    const x = parseFloat(options.numero);

    if (!isNaN(x)) {
      const memoizedDoblar = memoize(doblar);

      for (let i = 0; i < 10; i++) {
      const resultado = memoizedDoblar(x);
      console.log(`El doble de ${x} es ${resultado}`);
      }
      
    } else {
      console.error("Ingresa un número válido como argumento.");
    }
  });


program.parse(process.argv);