/*
  2 - Get Return Type
  -------
  by Anthony Fu (@antfu) #medium #infer #built-in

  ### Question

  Implement the built-in `ReturnType<T>` generic without using it.

  For example

  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // should be "1 | 2"
  ```

  > View on GitHub: https://tsch.js.org/2
*/

/* _____________ Your Code Here _____________ */

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type MyReturnType<T> = Function extends T ? T : T extends (...arguments_: Array<any>) => infer R ? R : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof function1>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof function2>>>,
];

interface ComplexObject {
  a: [12, 'foo'];
  bar: 'hello';
  prev(): number;
}

const function1 = (v: boolean) => (v ? 1 : 2);

const function2 = (v: boolean, _w: any) => (v ? 1 : 2);

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2/answer
  > View solutions: https://tsch.js.org/2/solutions
  > More Challenges: https://tsch.js.org
*/
