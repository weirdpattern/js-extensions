/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import assert from '../internal/assert';

/**
 * Gets the last `count` elements of the array.
 * @param   {Array.<*>}     source    the array to slice.
 * @param   {number}        [count=1] the number of elements to return.
 * @returns {(*|Array.<*>)}           the last element of the array when `count` == 1;
 *                                    a new array with the sliced elements when `count` > 1.
 *
 * @public
 * @function
 *
 * @example
 * last([])
 * // undefined
 *
 * last([1, 2, 3, 4]);
 * // 4
 *
 * last([1, 2, 3, 4], 2);
 * // [3, 4]
 *
 * last([1, 2, 3, 4], 3);
 * // [2, 3, 4]
 */
export default function last(source, count = 1) {
  assert(Array.isArray(source), 'Expecting an array');
  assert(count > 0, 'Expecting a valid item count');

  if (source.length === 0) return void 0;
  if (source.length <= count) return source.slice();

  const sliced = source.slice(source.length - count);
  return count === 1 ? sliced[0] : sliced;
}
