/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clear from '../../lib/arrays/clear';

describe('clear', () => {
  it('clears the content of an array', () => {
    const array = [1, 2, 3, 4];
    expect(clear(array)).toEqual([1, 2, 3, 4]);
    expect(array).toEqual([]);
  });

  it('throws exception when a non-array is passed', () => {
    expect(() => clear(null)).toThrow();
    expect(() => clear(void 0)).toThrow();
    expect(() => clear(true)).toThrow();
    expect(() => clear(0)).toThrow();
    expect(() => clear('')).toThrow();
    expect(() => clear({})).toThrow();
  });
});
