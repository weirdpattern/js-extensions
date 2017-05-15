import years from '../../lib/numbers/years';

describe('years', () => {
  const unit = years(1);

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

  it('returns the same years when calling toYears()', () => {
    expect(unit.toYears()).toBe(1);
  });

  it('converts years to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(3.154e16);
  });

  it('converts years to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(3.154e13);
  });

  it('converts years to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(3.154e10);
  });

  it('converts years to seconds', () => {
    expect(unit.toSeconds()).toBe(3.154e7);
  });

  it('converts years to minutes', () => {
    expect(unit.toMinutes()).toBe(525600);
  });

  it('converts years to hours', () => {
    expect(unit.toHours()).toBe(8760);
  });

  it('converts years to days', () => {
    expect(unit.toDays()).toBe(365);
  });

  it('converts years to weeks', () => {
    expect(unit.toWeeks()).toBe(52.1429);
  });

  it('converts years to months', () => {
    expect(unit.toMonths()).toBe(12);
  });

  it('converts years to decades', () => {
    expect(unit.toDecades()).toBe(0.1);
  });

  it('converts years to centuries', () => {
    expect(unit.toCenturies()).toBe(0.01);
  });
});
