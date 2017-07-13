/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import assert from '../internal/assert';

/**
 * Capitalizes the first word of the given string.
 * @param   {string}  value              the value to be capitilized.
 * @param   {boolean} [allWords = false] a flag indicating if all words needs to be capitalized.
 * @returns {string}                     the capitalized string.
 * @throws  {Error}                      when `value` is not a string.
 * @throws  {Error}                      when `allWords` is not a boolean.
 *
 * @public
 * @function
 *
 * @example
 * capitalize('hi');
 * // Hi
 *
 * capitalize('the fox jumps');
 * // The fox jumps
 *
 * capitalize('Hello World');
 * // Hello World
 *
 * capitalize('hello world');
 * // Hello world
 *
 * capitalize('hello world', true);
 * // Hello World
 */
export default function capitalize(value, allWords = false) {
  assert(typeof value === 'string', 'Expecting a string');
  assert(typeof allWords === 'boolean', 'Expecting a boolean');

  if (value.trim().length === 0) return value;
  if (!allWords) {
    return value.substring(0, 1).toUpperCase() + value.slice(1);
  }

  return value.replace(/\b[a-z]*/g, match => {
    return match.substring(0, 1).toUpperCase() + match.slice(1);
  });
}
