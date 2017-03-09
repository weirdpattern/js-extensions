/**
 * Converts the `count` to milliseconds assuming seconds were passed.
 * @param   {number} count the number of seconds.
 * @returns {number}       the seconds as milliseconds.
 *
 * @private
 * @function
 *
 * @example
 * $seconds(1);
 * // 1000
 *
 * $seconds(10);
 * // 10000
 *
 * $seconds(76);
 * // 760000
 */
function $seconds(count) {
  return count * 1000;
}

/**
 * Converts the `count` to milliseconds assuming minutes were passed.
 * @param   {number} count the number of minutes.
 * @returns {number}       the minutes as milliseconds.
 *
 * @private
 * @function
 *
 * @example
 * $minutes(1);
 * // 60000
 *
 * $minutes(10);
 * // 600000
 *
 * $minutes(76);
 * // 456000
 */
function $minutes(count) {
  return count * 60 * 1000;
}

/**
 * Converts the `count` to milliseconds assuming hours were passed.
 * @param   {number} count the number of hours.
 * @returns {number}       the hours as milliseconds.
 *
 * @private
 * @function
 *
 * @example
 * $hours(1);
 * // 3600000
 *
 * $hours(10);
 * // 36000000
 *
 * $hours(76);
 * // 273600000
 */
function $hours(count) {
  return count * 60 * 60 * 1000;
}

/**
 * Converts the `count` to milliseconds assuming days were passed.
 * @param   {number} count the number of days.
 * @returns {number}       the days as milliseconds.
 *
 * @private
 * @function
 *
 * @example
 * $days(1);
 * // 86400000
 *
 * $days(10);
 * // 864000000
 *
 * $days(76);
 * // 6566400000
 */
function $days(count) {
  return count * 24 * 60 * 60 * 1000;
}

Object.defineProperties(Number.prototype, {
  seconds: {
    get() {
      return $seconds(this.valueOf());
    }
  },

  minutes: {
    get() {
      return $minutes(this.valueOf());
    }
  },

  hours: {
    get() {
      return $hours(this.valueOf());
    }
  },

  days: {
    get() {
      return $days(this.valueOf());
    }
  }
});

Object.defineProperties(Number, {
  seconds: {
    value: $seconds
  },

  minutes: {
    value: $minutes
  },

  hours: {
    value: $hours
  },

  days: {
    value: $days
  }
});

export {
  $seconds as seconds,
  $minutes as minutes,
  $hours as hours,
  $days as days
};
