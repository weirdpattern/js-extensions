/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
 * Creates a second conversion wrapper.
 * @param   {number}    value the value in seconds to be wrapped.
 * @returns {Converter}       a converter object.
 */
export default function seconds(value) {
  return units.reduce(
    (definition, current) =>
      Object.defineProperty(definition, `to${current.substring(0, 1).toUpperCase() + current.slice(1)}`, {
        enumerable: true,
        configurable: false,
        value: () => value * ratios['seconds'].conversion[ratios[current].position],
      }),
    {},
  );
}
