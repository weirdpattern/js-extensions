import assert from './assert';

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
export function clear(source) {
  assert(Array.isArray(source), 'Expecting an array');
  return source.splice(0, source.length);
}

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
 * first([1, 2, 3, 4]);
 * // 1
 *
 * first([1, 2, 3, 4], 2);
 * // [1, 2]
 *
 * first([1, 2, 3, 4], 3);
 * // [1, 2, 3]
 */
export function first(source, count = 1) {
  assert(Array.isArray(source), 'Expecting an array');
  assert(count > 0, 'Expecting a valid item count');

  const sliced = source.slice(0, count);
  return count === 1 ? sliced[0] : sliced;
}

/**
 * Flattens all given sources into a single array.
 * @param   {Array.<*>} sources all the sources to flatten.
 * @returns {Array.<*>}         a 1 level depth array containing all elements from `sources`.
 *
 * @public
 * @function
 *
 * @example
 * flatten([1, [2, [3], 4]]);
 * // [1, 2, 3, 4]
 *
 * flatten(1, 2, 3, 4);
 * // [1, 2, 3, 4]
 *
 * flatten([1], [2, 3], [4]);
 * // [1, 2, 3, 4]
 */
export function flatten(...sources) {
  const target = sources.length > 0 ? sources.shift() : [];
  return sources.reduce(
    (reduced, current) => reduced.concat(Array.isArray(current) ? flatten(...current) : current),
    Array.isArray(target) ? flatten(...target) : [target],
  );
}

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
export function head(source) {
  return first(source, 1);
}

/**
 * Gets the last `count` elements of the array.
 * @param   {Array.<*>}     source    the array to slice.
 * @param   {number}        [count=1] the number of elements to return.
 * @returns {(*|Array.<*>)}           the last element of the array when `count` == 1;
 *                                    a new array with the sliced elements when `count` > 1.
 *
 * @public
 * @function
 *
 * @example
 * last([1, 2, 3, 4]);
 * // 4
 *
 * last([1, 2, 3, 4], 2);
 * // [3, 4]
 *
 * last([1, 2, 3, 4], 3);
 * // [2, 3, 4]
 */
export function last(source, count = 1) {
  assert(Array.isArray(source), 'Expecting an array');
  assert(count > 0, 'Expecting a valid item count');

  const sliced = count > source.length ? source.slice() : source.slice(source.length - count);
  return count === 1 ? sliced[0] : sliced;
}

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
export function tail(source) {
  return last(source, 1);
}

/**
 * Gets the index of the element in the array.
 * @param   {Array.<*>} source             the array to inspect.
 * @param   {*}         element            the element to search.
 * @param   {boolean}   [ignoreCase=false] a flag indicating whether to ignore the case of the elements or not.
 * @returns {number}                       the index of the element inside the array. 
 * 
 * @public
 * @function
 * 
 * @example
 * indexOf(['hello', 'my', 'friend'], 'Friend');
 * // -1
 * 
 * indexOf(['hello', 'my', 'friend'], 'Friend', false);
 * // -1
 * 
 * indexOf(['hello', 'my', 'friend'], 'Friend', true);
 * // 2
 * 
 */
export function indexOf(source, element, ignoreCase = false) {
  assert(Array.isArray(source), 'Expecting an array');

  let current;
  let index = -1;
  const length = source.length;
  while (++index < length) {
    current = source[index];
    if (typeof current === 'string' && ignoreCase) {
      current = current.toLowerCase();
    }

    if (current === element) return index;
  }

  return -1;
}
