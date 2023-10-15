import { memoize } from "../src/funcion-memoize";

describe("Creando función memoize", () => {
  test('La función memoize tiene que devolver el mismo resultado al recibir el mismo input', () => {
    const doblar = (x: number) => x * 2;
    const memoized = memoize(doblar);

    expect(memoized(2)).toBe(4);
    expect(memoized(2)).toBe(4);
    expect(memoized(3)).toBe(6);
  });
});
