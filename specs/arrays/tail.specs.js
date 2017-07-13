/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import tail from '../../lib/arrays/tail';

describe('tail', () => {
  it('returns undefined when the array is empty', () => {
    expect(tail([])).toBe(void 0);
  });

  it('returns the last element of an array', () => {
    expect(tail([1, 2, 3, 4])).toBe(4);
  });

  it('ignores other parameters passed', () => {
    expect(tail([1, 2, 3, 4], 2)).toEqual(4);
    expect(tail([1, 2, 3, 4], 3)).toEqual(4);
    expect(tail([1, 2, 3, 4], 4)).toEqual(4);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(tail(array)).toEqual(4);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => tail(null)).toThrow();
    expect(() => tail(void 0)).toThrow();

    expect(() => tail(true)).toThrow();
    expect(() => tail(0)).toThrow();
    expect(() => tail('')).toThrow();
    expect(() => tail({})).toThrow();

    expect(() => tail(true, 1)).toThrow();
    expect(() => tail(0, 1)).toThrow();
    expect(() => tail('', 1)).toThrow();
    expect(() => tail({}, 1)).toThrow();
  });
});
