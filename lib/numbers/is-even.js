import assert from '../internal/assert';

/**
 * Determines if a number is even (can be divided in groups of 2 evenly).
 * @param   {number}  value the number to be validated.
 * @returns {boolean}      `true` if the number is even; `false` otherwise.
 * @throws  {Error}         when `value` is not a number.
 *
 * @public
 * @function
 *
 * @example
 * isEven(2)
 * // true
 *
 * isEven(1)
 * // false
 */
export default function isEven(value) {
  assert(typeof value === 'number', 'Expecting a number');
  return value % 1 === 0 && value % 2 === 0;
}
