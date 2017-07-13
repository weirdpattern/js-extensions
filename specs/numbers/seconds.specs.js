/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import seconds from '../../lib/numbers/seconds';

describe('seconds', () => {
  const unit = seconds(1);

  it('creates a valid instance of the converter', () => {
    expect(Object.getOwnPropertyNames(unit)).toEqual([
      'toNanoseconds',
      'toMicroseconds',
      'toMilliseconds',
      'toSeconds',
      'toMinutes',
      'toHours',
      'toDays',
      'toWeeks',
      'toMonths',
      'toYears',
      'toDecades',
      'toCenturies',
    ]);
  });

  it('returns the same seconds when calling toSeconds()', () => {
    expect(unit.toSeconds()).toBe(1);
  });

  it('converts seconds to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(1e9);
  });

  it('converts seconds to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(1e6);
  });

  it('converts seconds to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(1000);
  });

  it('converts seconds to minutes', () => {
    expect(unit.toMinutes()).toBe(0.0166667);
  });

  it('converts seconds to hours', () => {
    expect(unit.toHours()).toBe(0.000277778);
  });

  it('converts seconds to days', () => {
    expect(unit.toDays()).toBe(1.1574e-5);
  });

  it('converts seconds to weeks', () => {
    expect(unit.toWeeks()).toBe(1.6534e-6);
  });

  it('converts seconds to months', () => {
    expect(unit.toMonths()).toBe(3.8052e-7);
  });

  it('converts seconds to years', () => {
    expect(unit.toYears()).toBe(3.171e-8);
  });

  it('converts seconds to decades', () => {
    expect(unit.toDecades()).toBe(3.171e-9);
  });

  it('converts seconds to centuries', () => {
    expect(unit.toCenturies()).toBe(3.171e-10);
  });
});
