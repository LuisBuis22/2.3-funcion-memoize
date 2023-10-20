"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doblar_memoize_1 = require("../controllers/doblar-memoize");
describe("Creando función memoize", () => {
    test('La función memoize tiene que devolver el mismo resultado al recibir el mismo input', () => {
        const doblar = (x) => x * 2;
        const memoized = (0, doblar_memoize_1.memoize)(doblar);
        expect(memoized(2)).toBe(4);
        expect(memoized(2)).toBe(4);
        expect(memoized(2)).toBe(4);
    });
});
//# sourceMappingURL=funcion-memoize.test.js.map