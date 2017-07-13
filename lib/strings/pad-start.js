/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import assert from '../internal/assert';

/**
 * Pads `value` with another string (repeated, if needed) so
 * that the resulting string reaches a given `length`.
 * @param   {string} value         the value to be padded.
 * @param   {number} length        the desired final length of the string.
 * @param   {string} [chars = ' '] the characters to be used to pad `value`.
 * @returns {string}               the padded string.
 * @throws  {Error}                when `value` is not a string.
 * @throws  {Error}                when `length` is not a number.
 * @throws  {Error}                when `char` is not a string.
 *
 * @public
 * @function
 *
 * @example
 * padStart('hello', 6);
 * // ' hello'
 *
 * padStart('hello', 10, '_');
 * // '_____hello'
 *
 * padStart('hello', 11, 'foo');
 * // 'foofoohello'
 *
 * padStart('hello', 3);
 * // 'hello'
 *
 * padStart('hello', 3, '*');
 * // 'hello'
 */
export default function padStart(value, length, chars = ' ') {
  assert(typeof value === 'string', 'Expecting a string');
  assert(typeof length === 'number', 'Expecting a number');
  assert(typeof chars === 'string', 'Expecting a string');

  if (value.length >= length) {
    return value;
  }

  const buffer = [];
  let count = length;
  while (count--) {
    buffer.push(chars);
  }

  buffer.push(value);
  return buffer.join('').slice(-length);
}
