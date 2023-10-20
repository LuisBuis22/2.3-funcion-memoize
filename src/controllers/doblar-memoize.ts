type MemoizeArgs = number[];

export function memoize(fn: Function) {
  const cache: { [key: string]: number } = {};

  return function (...args: MemoizeArgs) {
    const key = JSON.stringify(args);

    if(cache[key] !== undefined) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function doblar(x: number): number {
  console.log(`Calculando el doble de ${x}`);
  return x * 2;
}

const resultadoMemoize = memoize(doblar);

// console.log(resultadoMemoize());

