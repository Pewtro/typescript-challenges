/*
  16 - Pop
  -------
  by Anthony Fu (@antfu) #medium #array

  ### Question

  > TypeScript 4.0 is recommended in this challenge

  Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.

  For example

  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]

  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```

  **Extra**: Similarly, can you implement `Shift`, `Push` and `Unshift` as well?

  > View on GitHub: https://tsch.js.org/16
*/

/* _____________ Your Code Here _____________ */

type Pop<T extends Array<any>> = T extends [...infer U, any] ? U : T;
type Unshift<T extends Array<any>, U> = [U, ...T];
type Shift<T extends Array<any>> = T extends [any, ...infer U] ? U : T;
type Push<T extends Array<any>, U> = [...T, U];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
];

type unshiftCases = [
  Expect<Equal<Unshift<[3, 2, 1], 0>, [0, 3, 2, 1]>>,
  Expect<Equal<Unshift<['a', 'b', 'c'], 0>, [0, 'a', 'b', 'c']>>,
  Expect<Equal<Unshift<[], 0>, [0]>>,
];

type shiftCases = [
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c']>, ['b', 'c']>>,
  Expect<Equal<Shift<[]>, []>>,
];

type pushCases = [
  Expect<Equal<Push<[3, 2, 1], 0>, [3, 2, 1, 0]>>,
  Expect<Equal<Push<['a', 'b', 'c'], 0>, ['a', 'b', 'c', 0]>>,
  Expect<Equal<Push<[], 0>, [0]>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/16/answer
  > View solutions: https://tsch.js.org/16/solutions
  > More Challenges: https://tsch.js.org
*/
