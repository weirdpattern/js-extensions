import hours from '../../lib/numbers/hours';

describe('hours', () => {
  const unit = hours(1);

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

  it('returns the same hours when calling toHours()', () => {
    expect(unit.toHours()).toBe(1);
  });

  it('converts hours to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(3.6e12);
  });

  it('converts hours to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(3.6e9);
  });

  it('converts hours to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(3.6e6);
  });

  it('converts hours to seconds', () => {
    expect(unit.toSeconds()).toBe(3600);
  });

  it('converts hours to minutes', () => {
    expect(unit.toMinutes()).toBe(60);
  });

  it('converts hours to days', () => {
    expect(unit.toDays()).toBe(0.0416667);
  });

  it('converts hours to weeks', () => {
    expect(unit.toWeeks()).toBe(0.00595238);
  });

  it('converts hours to months', () => {
    expect(unit.toMonths()).toBe(0.00136986);
  });

  it('converts hours to years', () => {
    expect(unit.toYears()).toBe(0.000114155);
  });

  it('converts hours to decades', () => {
    expect(unit.toDecades()).toBe(1.1416e-5);
  });

  it('converts hours to centuries', () => {
    expect(unit.toCenturies()).toBe(1.1416e-6);
  });
});
