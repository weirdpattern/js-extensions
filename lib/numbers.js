import assert from './assert';

const ratios = {
  nanoseconds: {
    position: 0,
    conversion: [
      1,
      0.001,
      1e-6,
      1e-9,
      1.6667e-11,
      2.7778e-13,
      1.1574e-14,
      1.6534e-15,
      3.8052e-16,
      3.171e-17,
      3.171e-18,
      3.171e-19,
    ],
  },
  microseconds: {
    position: 1,
    conversion: [
      1000,
      1,
      0.001,
      1e-6,
      1.6667e-8,
      2.7778e-10,
      1.1574e-11,
      1.6534e-12,
      3.8052e-13,
      3.171e-14,
      3.171e-15,
      3.171e-16,
    ],
  },
  milliseconds: {
    position: 2,
    conversion: [
      1e6,
      1000,
      1,
      0.001,
      1.6667e-5,
      2.7778e-7,
      1.1574e-8,
      1.6534e-9,
      3.8052e-10,
      3.171e-11,
      3.171e-12,
      3.171e-13,
    ],
  },
  seconds: {
    position: 3,
    conversion: [
      1e9,
      1e6,
      1000,
      1,
      0.0166667,
      0.000277778,
      1.1574e-5,
      1.6534e-6,
      3.8052e-7,
      3.171e-8,
      3.171e-9,
      3.171e-10,
    ],
  },
  minutes: {
    position: 4,
    conversion: [
      6e10,
      6e7,
      60000,
      60,
      1,
      0.0166667,
      0.000694444,
      9.9206e-5,
      2.2831e-5,
      1.9026e-6,
      1.9026e-7,
      1.9026e-8,
    ],
  },
  hours: {
    position: 5,
    conversion: [
      3.6e12,
      3.6e9,
      3.6e6,
      3600,
      60,
      1,
      0.0416667,
      0.00595238,
      0.00136986,
      0.000114155,
      1.1416e-5,
      1.1416e-6,
    ],
  },
  days: {
    position: 6,
    conversion: [8.64e13, 8.64e10, 8.64e7, 86400, 1440, 24, 1, 0.142857, 0.0328767, 0.00273973, 0.000273973, 2.7397e-5],
  },
  weeks: {
    position: 7,
    conversion: [6.048e14, 6.048e11, 6.048e8, 604800, 10080, 168, 7, 1, 0.230137, 0.0191781, 0.00191781, 0.000191781],
  },
  months: {
    position: 8,
    conversion: [
      2.628e15,
      2628000000000,
      2628000000,
      2.628e6,
      43800,
      730.001,
      30.4167,
      4.34524,
      1,
      0.0833334,
      0.00833334,
      0.000833334,
    ],
  },
  years: {
    position: 9,
    conversion: [3.154e16, 3.154e13, 3.154e10, 3.154e7, 525600, 8760, 365, 52.1429, 12, 1, 0.1, 0.01],
  },
  decades: {
    position: 10,
    conversion: [3.154e17, 3.154e14, 3.154e11, 3.154e8, 5.256e6, 87600, 3650, 521.429, 120, 10, 1, 0.1],
  },
  centuries: {
    position: 11,
    conversion: [3.154e18, 3.154e15, 3.154e12, 3.154e9, 5.256e7, 876000, 36500, 5214.29, 1200, 100, 10, 1],
  },
};

/**
 * Builds:
 *
 * toNanoseconds()
 * toMicroseconds()
 * toMilliseconds()
 * toSeconds()
 * toMinutes()
 * toHours()
 * toDays()
 * toWeeks()
 * toMonths()
 * toYears()
 * toDecades()
 * toCenturies()
 */
const units = Object.getOwnPropertyNames(ratios);
units.forEach(unit => {
  exports[unit] = value =>
    units.reduce(
      (definition, current) =>
        Object.defineProperty(definition, `to${current.substring(0, 1).toUpperCase() + current.slice(1)}`, {
          enumerable: true,
          configurable: false,
          value: () => value * ratios[unit].conversion[ratios[current].position],
        }),
      {},
    );
});

/**
 * Determines if a number is even (can be divided in groups of 2 evenly).
 * @param   {number}  value the number to be validated.
 * @returns {boolean}      `true` if the number is even; `false` otherwise.
 * @throws  {Error}         when `value` is not a number.
 *
 * @public
 * @function
 *
 * @example
 * isEven(2)
 * // true
 *
 * isEven(1)
 * // false
 */
export function isEven(value) {
  assert(typeof value === 'number', 'Expecting a number');
  return value % 1 === 0 && value % 2 === 0;
}

/**
 * Determines if a number is odd (cannot be divided in groups of 2 evenly).
 * @param   {number}  value the number to be validated.
 * @returns {boolean}      `true` if the number is odd; `false` otherwise.
 * @throws  {Error}         when `value` is not a number.
 *
 * @public
 * @function
 *
 * @example
 * isOdd(1)
 * // true
 *
 * isOdd(2)
 * // false
 */
export function isOdd(value) {
  assert(typeof value === 'number', 'Expecting a number');
  return value % 1 === 0 && Math.abs(value % 2) === 1;
}
