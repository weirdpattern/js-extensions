/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import head from '../../lib/arrays/head';

describe('head', () => {
  it('returns undefined when the array is empty', () => {
    expect(head([])).toBe(void 0);
  });

  it('returns the first element of an array', () => {
    expect(head([1, 2, 3, 4])).toBe(1);
  });

  it('ignores other parameters passed', () => {
    expect(head([1, 2, 3, 4], 2)).toEqual(1);
    expect(head([1, 2, 3, 4], 3)).toEqual(1);
    expect(head([1, 2, 3, 4], 4)).toEqual(1);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(head(array)).toEqual(1);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => head(null)).toThrow();
    expect(() => head(void 0)).toThrow();

    expect(() => head(true)).toThrow();
    expect(() => head(0)).toThrow();
    expect(() => head('')).toThrow();
    expect(() => head({})).toThrow();

    expect(() => head(true, 1)).toThrow();
    expect(() => head(0, 1)).toThrow();
    expect(() => head('', 1)).toThrow();
    expect(() => head({}, 1)).toThrow();
  });
});
