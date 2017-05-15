import assert from '../internal/assert';

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
export default function indexOf(source, element, ignoreCase = false) {
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
