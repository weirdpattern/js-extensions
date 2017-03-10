import assert from './assert';

const ratios = {
  nanoseconds: [1e-9, 1e+9],
  microseconds: [1e-6, 1e+6],
  milliseconds: [0.001, 1000],
  seconds: [1, 1],
  minutes: [60, 0.0166667],
  hours: [3600, 0.00027777833333],
  days: [86400, 1.1574e-5],
  weeks: [604800, 1.65344e-6],
  months: [2.628e+6, 3.8052e-7],
  years: [3.154e+7, 3.171e-8],
  decades: [3.154e+8, 3.171e-9],
  centuries: [3.154e+9, 3.171e-10]
};

const units = Object.getOwnPropertyNames(ratios);
units.forEach((unit) => {
  exports[unit] = value => units.reduce(
    function reductor(definition, current) {
      return Object.defineProperty(definition, `to${current.substring(0, 1).toUpperCase() + current.slice(1)}`, {
        enumerable: true,
        configurable: false,
        value: () => {
          if (unit === current) return 1;
          return value * ratios[unit][0] * ratios[current][1];
        }
      });
    }, {});
});

export function isEven(value) {
  assert(typeof value === 'number', 'Expecting a number');
  return value % 2 === 0;
}

export function isOdd(value) {
  assert(typeof value === 'number', 'Expecting a number');
  return Math.abs(value % 2) === 1;
}
