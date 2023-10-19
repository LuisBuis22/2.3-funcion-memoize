"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
function memoize(fn) {
    const save = new Map();
    return (arg) => {
        if (save.has(arg)) {
            return save.get(arg);
        }
        else {
            const result = fn(arg);
            save.set(arg, result);
            return result;
        }
    };
}
exports.memoize = memoize;
function doblar(x) {
    console.log(x * 2);
    return x * 2;
}
const resultadoMemoize = memoize(doblar);
//# sourceMappingURL=doblar-memoize.js.map