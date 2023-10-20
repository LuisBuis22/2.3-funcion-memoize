"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}
exports.memoize = memoize;
function doblar(x) {
    console.log(`Calculando el doble de ${x}`);
    return x * 2;
}
const resultadoMemoize = memoize(doblar);
//# sourceMappingURL=doblar-memoize.js.map