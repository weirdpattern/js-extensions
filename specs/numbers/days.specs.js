/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import days from '../../lib/numbers/days';

describe('days', () => {
  const unit = days(1);

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

  it('returns the same days when calling toDays()', () => {
    expect(unit.toDays()).toBe(1);
  });

  it('converts days to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(8.64e13);
  });

  it('converts days to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(8.64e10);
  });

  it('converts days to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(8.64e7);
  });

  it('converts days to seconds', () => {
    expect(unit.toSeconds()).toBe(86400);
  });

  it('converts days to minutes', () => {
    expect(unit.toMinutes()).toBe(1440);
  });

  it('converts days to hours', () => {
    expect(unit.toHours()).toBe(24);
  });

  it('converts days to weeks', () => {
    expect(unit.toWeeks()).toBe(0.142857);
  });

  it('converts days to months', () => {
    expect(unit.toMonths()).toBe(0.0328767);
  });

  it('converts days to years', () => {
    expect(unit.toYears()).toBe(0.00273973);
  });

  it('converts days to decades', () => {
    expect(unit.toDecades()).toBe(0.000273973);
  });

  it('converts days to centuries', () => {
    expect(unit.toCenturies()).toBe(2.7397e-5);
  });
});
