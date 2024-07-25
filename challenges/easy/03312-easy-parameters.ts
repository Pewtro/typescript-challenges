/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #easy #infer #tuple #built-in

  ### Question

  Implement the built-in Parameters<T> generic without using it.

  For example:

  ```ts
  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```

  > View on GitHub: https://tsch.js.org/3312
*/

/* _____________ Your Code Here _____________ */

type MyParameters<T extends (...arguments_: Array<any>) => any> = T extends (...arguments_: infer P) => any ? P : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const foo = (_argument1: string, _argument2: number): void => {};
// eslint-disable-next-line @typescript-eslint/no-empty-function
const bar = (_argument1: boolean, _argument2: { a: 'A' }): void => {};
// eslint-disable-next-line @typescript-eslint/no-empty-function
const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3312/answer
  > View solutions: https://tsch.js.org/3312/solutions
  > More Challenges: https://tsch.js.org
*/
