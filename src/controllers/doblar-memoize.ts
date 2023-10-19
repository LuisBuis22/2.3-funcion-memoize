export function memoize <T, U>(fn: (arg: T) => U): (arg: T) => U {
  const save = new Map<T, U>();

  return (arg:T) => {
    if (save.has(arg)) {
      return save.get(arg) as U;
    } else {
      const result = fn(arg);
      save.set(arg, result);
      return result;
    }
  };
}

function doblar(x: number): number {
  console.log(x * 2);
  return x * 2;
}

const resultadoMemoize = memoize(doblar);
