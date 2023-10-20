"use strict";
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
function doblar(x) {
    console.log(x * 2);
    return x * 2;
}
const memoizeDoble = memoize(doblar);
console.log(memoizeDoble(2));
console.log(memoizeDoble(2));
console.log(memoizeDoble(2));
console.log(memoizeDoble(2));
console.log(memoizeDoble(2));
//# sourceMappingURL=funcion-memoize.js.map