import decades from '../../lib/numbers/decades';

describe('decades', () => {
  const unit = decades(1);

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

  it('returns the same decades when calling toDecades()', () => {
    expect(unit.toDecades()).toBe(1);
  });

  it('converts decades to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(3.154e17);
  });

  it('converts decades to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(3.154e14);
  });

  it('converts decades to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(3.154e11);
  });

  it('converts decades to seconds', () => {
    expect(unit.toSeconds()).toBe(3.154e8);
  });

  it('converts decades to minutes', () => {
    expect(unit.toMinutes()).toBe(5.256e6);
  });

  it('converts decades to hours', () => {
    expect(unit.toHours()).toBe(87600);
  });

  it('converts decades to days', () => {
    expect(unit.toDays()).toBe(3650);
  });

  it('converts decades to weeks', () => {
    expect(unit.toWeeks()).toBe(521.429);
  });

  it('converts decades to months', () => {
    expect(unit.toMonths()).toBe(120);
  });

  it('converts decades to years', () => {
    expect(unit.toYears()).toBe(10);
  });

  it('converts decades to centuries', () => {
    expect(unit.toCenturies()).toBe(0.1);
  });
});
