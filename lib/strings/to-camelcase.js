/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import assert from '../internal/assert';

/**
 * Converts the given string to camelCase.
 * @param   {string} value the value to be converted to camelCase.
 * @returns {string}       the same string in camelCase format.
 *
 * @public
 * @function
 *
 * @example
 * toCamelCase('hi');
 * // hi
 *
 * toCamelCase('the fox jumps');
 * // theFoxJumps
 *
 * toCamelCase('Hello World');
 * // helloWorld
 */
export default function toCamelCase(value) {
  assert(typeof value === 'string', 'Expecting a string');

  if (value.trim().length === 0) return value;

  const capitalized = value.replace(/\b[a-z]*/g, match => {
    return match.substring(0, 1).toUpperCase() + match.slice(1);
  });

  return capitalized[0].toLowerCase() + capitalized.slice(1).replace(/\s+/g, '');
}
