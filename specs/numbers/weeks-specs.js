import weeks from '../../lib/numbers/weeks';

describe('weeks', () => {
  const unit = weeks(1);

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

  it('returns the same weeks when calling toWeeks()', () => {
    expect(unit.toWeeks()).toBe(1);
  });

  it('converts weeks to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(6.048e14);
  });

  it('converts weeks to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(6.048e11);
  });

  it('converts weeks to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(6.048e8);
  });

  it('converts weeks to seconds', () => {
    expect(unit.toSeconds()).toBe(604800);
  });

  it('converts weeks to minutes', () => {
    expect(unit.toMinutes()).toBe(10080);
  });

  it('converts weeks to hours', () => {
    expect(unit.toHours()).toBe(168);
  });

  it('converts weeks to days', () => {
    expect(unit.toDays()).toBe(7);
  });

  it('converts weeks to months', () => {
    expect(unit.toMonths()).toBe(0.230137);
  });

  it('converts weeks to years', () => {
    expect(unit.toYears()).toBe(0.0191781);
  });

  it('converts weeks to decades', () => {
    expect(unit.toDecades()).toBe(0.00191781);
  });

  it('converts weeks to centuries', () => {
    expect(unit.toCenturies()).toBe(0.000191781);
  });
});
