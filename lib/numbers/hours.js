import assert from '../internal/assert';
import { units, ratios } from '../internal/unit-ratios';

/**
 * @typedef {Object} Converter
 * @property {Function} toNanoseconds  converts to nanoseconds.
 * @property {Function} toMicroseconds converts to microseconds.
 * @property {Function} toMilliseconds converts to milliseconds.
 * @property {Function} toSeconds      converts to seconds.
 * @property {Function} toMinutes      converts to minutes.
 * @property {Function} toHours        converts to hours.
 * @property {Function} toDays         converts to days.
 * @property {Function} toWeeks        converts to weeks.
 * @property {Function} toMonths       converts to months.
 * @property {Function} toYears        converts to years.
 * @property {Function} toDecades      converts to decades.
 * @property {Function} toCenturies    converts to centuries.
 */

/**
 * Creates a hour conversion wrapper.
 * @param   {number}    value the value in hours to be wrapped.
 * @returns {Converter}       a converter object.
 */
export default function hours(value) {
  return units.reduce(
    (definition, current) =>
      Object.defineProperty(definition, `to${current.substring(0, 1).toUpperCase() + current.slice(1)}`, {
        enumerable: true,
        configurable: false,
        value: () => value * ratios['hours'].conversion[ratios[current].position],
      }),
    {},
  );
}
