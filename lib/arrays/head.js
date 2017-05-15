import assert from '../internal/assert';

/**
 * Gets the first element of the array.
 * @param   {Array.<*>} source the array to slice.
 * @returns {*}                the first element of the array.
 *
 * @public
 * @function
 *
 * @example
 * head([1, 2, 3, 4]);
 * // 1
 */
export default function head(source) {
  assert(Array.isArray(source), 'Expecting an array');

  if (source.length === 0) return void 0;

  return source.slice(0, 1)[0];
}
