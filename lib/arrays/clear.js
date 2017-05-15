import assert from '../internal/assert';

/**
 * Clears an array, returning all elements.
 * @param   {Array.<*>} source the array to clear.
 * @returns {Array.<*>}        all the elements of the array.
 *
 * @public
 * @function
 *
 * @example
 * var array = [1, 2, 3, 4];
 * clear(array);
 * // returns [1, 2, 3, 4], whilst array = []
 */
export default function clear(source) {
  assert(Array.isArray(source), 'Expecting an array');
  return source.splice(0, source.length);
}
