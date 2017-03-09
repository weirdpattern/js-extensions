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
 * Gets the first `count` elements of the array.
 * @param   {Array.<*>}     source    the array to be sliced.
 * @param   {number}        [count=1] the number of elements to be returned.
 * @returns {(*|Array.<*>)}           the first element of the array when `count` == 1;
 *                                    a new array with the sliced elements when `count` > 1.
 *
 * @private
 * @function
 *
 * @example
 * $first([1, 2, 3, 4]);
 * // 1
 *
 * $first([1, 2, 3, 4], 2);
 * // [1, 2]
 *
 * $first([1, 2, 3, 4], 3);
 * // [1, 2, 3]
 */
function $first(source, count = 1) {
  assert(Array.isArray(source), 'Expecting an array');
  assert(count < 1, 'Expecting a valid item count');

  const sliced = source.slice(0, count);
  return count === 1
    ? sliced[0]
    : sliced;
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

/**
 * Gets the first element of the array.
 * @returns {*} the first element of the array.
 *
 * @private
 * @function
 *
 * @example
 * $head([1, 2, 3, 4]);
 * // 1
 */
function $head(source) {
  return $first(source, 1);
}

/**
 * Gets the last `count` elements of the array.
 * @param   {Array.<*>}     source    the array to be sliced.
 * @param   {number}        [count=1] the number of elements to be returned.
 * @returns {(*|Array.<*>)}           the last element of the array when `count` == 1;
 *                                    a new array with the sliced elements when `count` > 1.
 *
 * @private
 * @function
 *
 * @example
 * $last([1, 2, 3, 4]);
 * // 4
 *
 * $last([1, 2, 3, 4], 2);
 * // [3, 4]
 *
 * $last([1, 2, 3, 4], 3);
 * // [2, 3, 4]
 */
function $last(source, count = 1) {
  assert(Array.isArray(source), 'Expecting an array');
  assert(count < 1, 'Expecting a valid item count');

  const sliced = source.slice(source.length - count);
  return count === 1
    ? sliced[0]
    : sliced;
}

/**
 * Gets the last element of the array.
 * @returns {*} the last element of the array.
 *
 * @private
 * @function
 *
 * @example
 * $tail([1, 2, 3, 4]);
 * // 4
 */
function $tail(source) {
  return $last(source, 1);
}

Object.defineProperties(Array.prototype, {
  /**
   * Clears an array, returning all elements.
   * @returns {Array.<*>} all the elements of the array.
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
   * Gets the first `count` elements of the array.
   * @param   {number}        [count=1] the number of elements to be returned.
   * @returns {(*|Array.<*>)}           the first element of the array when `count` == 1;
   *                                    a new array with the sliced elements when `count` > 1.
   *
   * @public
   * @method
   * @memberOf Array.prototype
   *
   * @example
   * var array = [1, 2, 3, 4];
   * array.first();
   * // 1
   *
   * array.first(2);
   * // [1, 2]
   *
   * array.first(3);
   * // [1, 2, 3]
   */
  first: {
    value(count = 1) {
      return $first(this, count);
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
  },

  /**
   * Gets the first element of the array.
   * @returns {*} the first element of the array.
   *
   * @public
   * @method
   * @memberOf Array.prototype
   *
   * @example
   * var array = [1, 2, 3, 4];
   * array.head();
   * // 1
   */
  head: {
    value() {
      return $head(this);
    }
  },

  /**
   * Gets the last `count` elements of the array.
   * @param   {number}        [count=1] the number of elements to be returned.
   * @returns {(*|Array.<*>)}           the last element of the array when `count` == 1;
   *                                    a new array with the sliced elements when `count` > 1.
   *
   * @public
   * @method
   * @memberOf Array.prototype
   *
   * @example
   * var array = [1, 2, 3, 4];
   * array.last();
   * // 4
   *
   * array.last(2);
   * // [3, 4]
   *
   * array.last(3);
   * // [2, 3, 4]
   */
  last: {
    value(count = 1) {
      return $last(this, count);
    }
  },

  /**
   * Gets the last element of the array.
   * @returns {*} the last element of the array.
   *
   * @public
   * @method
   * @memberOf Array.prototype
   *
   * @example
   * var array = [1, 2, 3, 4];
   * array.last();
   * // 4
   */
  tail: {
    value() {
      return $tail(this);
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
   * Gets the first `count` elements of the array.
   * @param   {Array.<*>}     source    the array to be sliced.
   * @param   {number}        [count=1] the number of elements to be returned.
   * @returns {(*|Array.<*>)}           the first element of the array when `count` == 1;
   *                                    a new array with the sliced elements when `count` > 1.
   *
   * @static
   * @public
   * @method
   * @memberOf Array
   *
   * @example
   * Array.first([1, 2, 3, 4]);
   * // 1
   *
   * Array.first([1, 2, 3, 4], 2);
   * // [1, 2]
   *
   * Array.first([1, 2, 3, 4], 3);
   * // [1, 2, 3]
   */
  first: {
    value: $first
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
  },

  /**
   * Gets the first element of the array.
   * @param   {Array.<*>} source the array to be sliced.
   * @returns {*}                the first element of the array.
   *
   * @static
   * @public
   * @method
   * @memberOf Array.prototype
   *
   * @example
   * Array.head([1, 2, 3, 4]);
   * // 1
   */
  head: {
    value(source) {
      return $first(source, 1);
    }
  },

  /**
   * Gets the last `count` elements of the array.
   * @param   {Array.<*>}     source    the array to be sliced.
   * @param   {number}        [count=1] the number of elements to be returned.
   * @returns {(*|Array.<*>)}           the last element of the array when `count` == 1;
   *                                    a new array with the sliced elements when `count` > 1.
   *
   * @static
   * @public
   * @method
   * @memberOf Array
   *
   * @example
   * Array.last([1, 2, 3, 4]);
   * // 4
   *
   * Array.last([1, 2, 3, 4], 2);
   * // [3, 4]
   *
   * Array.last([1, 2, 3, 4], 3);
   * // [2, 3, 4]
   */
  last: {
    value: $last
  },

  /**
   * Gets the last element of the array.
   * @param   {Array.<*>} source the array to be sliced.
   * @returns {*} the last element of the array.
   *
   * @static
   * @public
   * @method
   * @memberOf Array
   *
   * @example
   * Array.tail([1, 2, 3, 4]);
   * // 4
   */
  tail: {
    value(source) {
      return $last(source, 1);
    }
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
   * Gets the first `count` elements of the array.
   * @param   {Array.<*>}     source    the array to be sliced.
   * @param   {number}        [count=1] the number of elements to be returned.
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
  $first as first,

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
  $flatten as flatten,

  /**
   * Gets the first element of the array.
   * @param   {Array.<*>} source the array to be sliced.
   * @returns {*}                the first element of the array.
   *
   * @public
   * @function
   *
   * @example
   * head([1, 2, 3, 4]);
   * // 1
   */
  $head as head,

  /**
   * Gets the last `count` elements of the array.
   * @param   {Array.<*>}     source    the array to be sliced.
   * @param   {number}        [count=1] the number of elements to be returned.
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
  $last as last,

  /**
   * Gets the last element of the array.
   * @param   {Array.<*>} source the array to be sliced.
   * @returns {*} the last element of the array.
   *
   * @public
   * @function
   *
   * @example
   * tail([1, 2, 3, 4]);
   * // 4
   */
  $tail as tail
};
