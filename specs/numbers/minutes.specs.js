/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import minutes from '../../lib/numbers/minutes';

describe('minutes', () => {
  const unit = minutes(1);

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

  it('returns the same minutes when calling toMinutes()', () => {
    expect(unit.toMinutes()).toBe(1);
  });

  it('converts minutes to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(6e10);
  });

  it('converts minutes to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(6e7);
  });

  it('converts minutes to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(60000);
  });

  it('converts minutes to seconds', () => {
    expect(unit.toSeconds()).toBe(60);
  });

  it('converts minutes to hours', () => {
    expect(unit.toHours()).toBe(0.0166667);
  });

  it('converts minutes to days', () => {
    expect(unit.toDays()).toBe(0.000694444);
  });

  it('converts minutes to weeks', () => {
    expect(unit.toWeeks()).toBe(9.9206e-5);
  });

  it('converts minutes to months', () => {
    expect(unit.toMonths()).toBe(2.2831e-5);
  });

  it('converts minutes to years', () => {
    expect(unit.toYears()).toBe(1.9026e-6);
  });

  it('converts minutes to decades', () => {
    expect(unit.toDecades()).toBe(1.9026e-7);
  });

  it('converts minutes to centuries', () => {
    expect(unit.toCenturies()).toBe(1.9026e-8);
  });
});
