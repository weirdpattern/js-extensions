/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import isOdd from '../../lib/numbers/is-odd';

describe('isOdd', () => {
  it('returns true when an odd number is passed', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(1.0)).toBe(true);
    expect(isOdd(3.0)).toBe(true);
    expect(isOdd(5.0)).toBe(true);
    expect(isOdd(7.0)).toBe(true);
  });

  it('returns false when an even number is passed', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(8)).toBe(false);
    expect(isOdd(2.0)).toBe(false);
    expect(isOdd(4.0)).toBe(false);
    expect(isOdd(6.0)).toBe(false);
    expect(isOdd(8.0)).toBe(false);
    expect(isOdd(1.1)).toBe(false);
    expect(isOdd(3.3)).toBe(false);
    expect(isOdd(5.5)).toBe(false);
    expect(isOdd(7.7)).toBe(false);
    expect(isOdd(2.2)).toBe(false);
    expect(isOdd(4.4)).toBe(false);
    expect(isOdd(6.6)).toBe(false);
    expect(isOdd(8.8)).toBe(false);
  });

  it('throws an exception when a non number is passed', () => {
    expect(() => isOdd(true)).toThrow();
    expect(() => isOdd('string')).toThrow();
    expect(() => isOdd([])).toThrow();
    expect(() => isOdd([1])).toThrow();
    expect(() => isOdd([2])).toThrow();
    expect(() => isOdd([1, 2])).toThrow();
    expect(() => isOdd({})).toThrow();
  });
});
