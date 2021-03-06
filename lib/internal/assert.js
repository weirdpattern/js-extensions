/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Throws an error when `condition` is `false`.
 * @param  {boolean} condition the condition to be satisfied.
 * @param  {string}  message   the error message to be displayed.
 * @throws {Error}             when `condition` is `false`.
 *
 * @public
 * @function
 * @memberOf utils
 *
 * @example
 * assert(1 === 1, 'expecting the same number');
 * // ok
 *
 * assert(1 === 2, 'expecting the same number');
 * // throws Assertion failed: expecting the same number.
 */
export default function(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}
