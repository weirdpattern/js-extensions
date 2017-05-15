import assert from '../internal/assert';

/**
 * Gets the first `count` elements of the array.
 * @param   {Array.<*>}     source    the array to slice.
 * @param   {number}        [count=1] the number of elements to return.
 * @returns {(*|Array.<*>)}           the first element of the array when `count` == 1;
 *                                    a new array with the sliced elements when `count` > 1.
 *
 * @public
 * @function
 *
 * @example
 * first([])
 * // undefined 
 * 
 * first([1, 2, 3, 4]);
 * // 1
 *
 * first([1, 2, 3, 4], 2);
 * // [1, 2]
 *
 * first([1, 2, 3, 4], 3);
 * // [1, 2, 3]
 */
export default function first(source, count = 1) {
  assert(Array.isArray(source), 'Expecting an array');
  assert(count > 0, 'Expecting a valid item count');

  if (source.length === 0) return void 0;
  if (source.length <= count) return source.slice();

  const sliced = source.slice(0, count);
  return count === 1 ? sliced[0] : sliced;
}
