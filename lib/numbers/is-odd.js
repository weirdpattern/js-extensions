import assert from '../internal/assert';

/**
 * Determines if a number is odd (cannot be divided in groups of 2 evenly).
 * @param   {number}  value the number to be validated.
 * @returns {boolean}      `true` if the number is odd; `false` otherwise.
 * @throws  {Error}         when `value` is not a number.
 *
 * @public
 * @function
 *
 * @example
 * isOdd(1)
 * // true
 *
 * isOdd(2)
 * // false
 */
export default function isOdd(value) {
  assert(typeof value === 'number', 'Expecting a number');
  return value % 1 === 0 && Math.abs(value % 2) === 1;
}
