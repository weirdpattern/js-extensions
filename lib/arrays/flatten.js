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
export default function flatten(...sources) {
  const target = sources.length > 0 ? sources.shift() : [];
  return sources.reduce(
    (reduced, current) => reduced.concat(Array.isArray(current) ? flatten(...current) : current),
    Array.isArray(target) ? flatten(...target) : [target],
  );
}
