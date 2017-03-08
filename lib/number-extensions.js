/**
 * @module number-extensions
 */

function $seconds(count) {
  return count * 1000;
}

function $minutes(count) {
  return count * 60 * 1000;
}

function $hours(count) {
  return count * 60 * 60 * 1000;
}

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
