/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import milliseconds from '../../lib/numbers/milliseconds';

describe('milliseconds', () => {
  const unit = milliseconds(1);

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

  it('returns the same milliseconds when calling toMilliseconds()', () => {
    expect(unit.toMilliseconds()).toBe(1);
  });

  it('converts milliseconds to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(1e6);
  });

  it('converts milliseconds to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(1000);
  });

  it('converts milliseconds to seconds', () => {
    expect(unit.toSeconds()).toBe(0.001);
  });

  it('converts milliseconds to minutes', () => {
    expect(unit.toMinutes()).toBe(1.6667e-5);
  });

  it('converts milliseconds to hours', () => {
    expect(unit.toHours()).toBe(2.7778e-7);
  });

  it('converts milliseconds to days', () => {
    expect(unit.toDays()).toBe(1.1574e-8);
  });

  it('converts milliseconds to weeks', () => {
    expect(unit.toWeeks()).toBe(1.6534e-9);
  });

  it('converts milliseconds to months', () => {
    expect(unit.toMonths()).toBe(3.8052e-10);
  });

  it('converts milliseconds to years', () => {
    expect(unit.toYears()).toBe(3.171e-11);
  });

  it('converts milliseconds to decades', () => {
    expect(unit.toDecades()).toBe(3.171e-12);
  });

  it('converts milliseconds to centuries', () => {
    expect(unit.toCenturies()).toBe(3.171e-13);
  });
});
