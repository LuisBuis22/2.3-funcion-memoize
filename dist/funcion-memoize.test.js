"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcion_memoize_1 = require("../src/funcion-memoize");
describe("Creando función memoize", () => {
    test('La función memoize tiene que devolver el mismo resultado al recibir el mismo input', () => {
        const doblar = (x) => x * 2;
        const memoized = (0, funcion_memoize_1.memoize)(doblar);
        expect(memoized(2)).toBe(4);
        expect(memoized(2)).toBe(4);
        expect(memoized(3)).toBe(6);
    });
});
//# sourceMappingURL=funcion-memoize.test.js.map