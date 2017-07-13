/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import assert from '../internal/assert';

/**
 * Gets the index of the element in the array.
 * @param   {Array.<*>} source             the array to inspect.
 * @param   {*}         element            the element to search.
 * @param   {boolean}   [ignoreCase=false] a flag indicating whether to ignore the case of the elements or not.
 * @returns {number}                       the index of the element inside the array.
 *
 * @public
 * @function
 *
 * @example
 * indexOf(['hello', 'my', 'friend'], 'Friend');
 * // -1
 *
 * indexOf(['hello', 'my', 'friend'], 'Friend', false);
 * // -1
 *
 * indexOf(['hello', 'my', 'friend'], 'Friend', true);
 * // 2
 *
 */
export default function indexOf(source, element, ignoreCase = false) {
  assert(Array.isArray(source), 'Expecting an array');
  assert(typeof ignoreCase === 'boolean', 'Expecting a boolean');

  const target = ignoreCase && typeof element === 'string' ? element.toLowerCase() : element;

  let current;
  let index = -1;
  const length = source.length;
  while (++index < length) {
    current = source[index];
    if (ignoreCase && typeof current === 'string') {
      current = current.toLowerCase();
    }

    if (current === target) return index;
  }

  return -1;
}
