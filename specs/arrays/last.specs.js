/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import last from '../../lib/arrays/last';

describe('last', () => {
  it('returns undefined when the array is empty', () => {
    expect(last([])).toBe(void 0);
  });

  it('returns the last element of an array', () => {
    expect(last([1, 2, 3, 4])).toBe(4);
    expect(last([1, 2, 3, 4], 1)).toBe(4);
  });

  it('returns the last n elements of an array', () => {
    expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(last([1, 2, 3, 4], 3)).toEqual([2, 3, 4]);
    expect(last([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });

  it('returns all elements of an array when the count exceeds the length', () => {
    expect(last([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    expect(last([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4]);
    expect(last([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4]);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(last(array, 2)).toEqual([3, 4]);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => last(null)).toThrow();
    expect(() => last(void 0)).toThrow();

    expect(() => last(true)).toThrow();
    expect(() => last(0)).toThrow();
    expect(() => last('')).toThrow();
    expect(() => last({})).toThrow();

    expect(() => last(true, 1)).toThrow();
    expect(() => last(0, 1)).toThrow();
    expect(() => last('', 1)).toThrow();
    expect(() => last({}, 1)).toThrow();
  });

  it('throws an exception when the count is less than 1', () => {
    expect(() => last([1, 2, 3, 4], 0)).toThrow();
    expect(() => last([1, 2, 3, 4], -1)).toThrow();
    expect(() => last([1, 2, 3, 4], -2)).toThrow();
  });
});
