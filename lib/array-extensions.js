import assert from './assert';

/**
 * Clears an array, returning all elements.
 * @param   {Array.<*>} source the array to be cleared.
 * @returns {Array.<*>}        all the elements of the array.
 *
 * @private
 * @function
 *
 * @example
 * var array = [1, 2, 3, 4];
 * $clear(array);
 * // returns [1, 2, 3, 4], whilst array = []
 */
function $clear(source) {
  assert(Array.isArray(source), 'Expecting an array');
  return source.splice(0, source.length);
}

/**
 * Flattens all given sources into a single array.
 * @param   {Array.<*>} sources all the sources to be flattened.
 * @returns {Array.<*>}         a 1 level depth array containing all elements from `sources`.
 *
 * @private
 * @function
 *
 * @example
 * $flatten([1, [2, [3], 4]]);
 * // [1, 2, 3, 4]
 *
 * $flatten(1, 2, 3, 4);
 * // [1, 2, 3, 4]
 *
 * $flatten([1], [2, 3], [4]);
 * // [1, 2, 3, 4]
 */
function $flatten(...sources) {
  const target = sources.length > 0 ? sources.shift() : [];
  return sources.reduce(
    (reduced, current) => reduced.concat(Array.isArray(current)
      ? $flatten(...current)
      : current),
    Array.isArray(target) ? $flatten(...target) : [target]
  );
}

Object.defineProperties(Array.prototype, {
  /**
   * Clears an array, returning all elements.
   * @returns {Array.<*>}        all the elements of the array.
   *
   * @public
   * @method
   * @memberOf Array.prototype
   *
   * @example
   * var array = [1, 2, 3, 4];
   * array.clear();
   * // returns [1, 2, 3, 4], whilst array = []
   */
  clear: {
    value() {
      return $clear(this);
    }
  },

  /**
   * Flattens all given sources into a single array.
   * @param   {Array.<*>} sources all the sources to be flattened.
   * @returns {Array.<*>}         a 1 level depth array containing all elements from `sources`.
   *
   * @private
   * @method
   * @memberOf Array.prototype
   *
   * @example
   * var array = [1, [2, [3], 4]];
   * array.flatten();
   * // [1, 2, 3, 4]
   *
   * var array = [1];
   * array.flatten(2, 3, 4);
   * // [1, 2, 3, 4]
   *
   * var array = [1];
   * array.flatten([2, 3], [4]);
   * // [1, 2, 3, 4]
   */
  flatten: {
    value(...sources) {
      this.push(...$flatten(this.clear(), ...sources));
      return this;
    }
  }
});

Object.defineProperties(Array, {
  /**
   * Clears an array, returning all elements.
   * @param   {Array.<*>} source the array to be cleared.
   * @returns {Array.<*>}        all the elements of the array.
   *
   * @static
   * @public
   * @method
   * @memberOf Array
   *
   * @example
   * var array = [1, 2, 3, 4];
   * Array.clear(array);
   * // returns [1, 2, 3, 4], whilst array = []
   */
  clear: {
    value: $clear
  },

  /**
   * Flattens all given sources into a single array.
   * @param   {Array.<*>} sources all the sources to be flattened.
   * @returns {Array.<*>}         a 1 level depth array containing all elements from `sources`.
   *
   * @static
   * @public
   * @method
   * @memberOf Array
   *
   * @example
   * Array.flatten([1, [2, [3], 4]]);
   * // [1, 2, 3, 4]
   *
   * Array.flatten(1, 2, 3, 4);
   * // [1, 2, 3, 4]
   *
   * Array.flatten([1], [2, 3], [4]);
   * // [1, 2, 3, 4]
   */
  flatten: {
    value: $flatten
  }
});

export {
  /**
   * Clears an array, returning all elements.
   * @param   {Array.<*>} source the array to be cleared.
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
  $clear as clear,

  /**
   * Flattens all given sources into a single array.
   * @param   {Array.<*>} sources all the sources to be flattened.
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
  $flatten as flatten
};
