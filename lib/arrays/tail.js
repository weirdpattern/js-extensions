import assert from '../internal/assert';

/**
 * Gets the last element of the array.
 * @param   {Array.<*>} source the array to slice.
 * @returns {*}                the last element of the array.
 *
 * @public
 * @function
 *
 * @example
 * tail([1, 2, 3, 4]);
 * // 4
 */
export default function tail(source) {
  assert(Array.isArray(source), 'Expecting an array');

  if (source.length === 0) return void 0;

  return source[source.length - 1];
}
