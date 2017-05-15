import months from '../../lib/numbers/months';

describe('months', () => {
  const unit = months(1);

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

  it('returns the same months when calling toMonths()', () => {
    expect(unit.toMonths()).toBe(1);
  });

  it('converts months to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(2.628e15);
  });

  it('converts months to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(2.628e12);
  });

  it('converts months to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(2.628e9);
  });

  it('converts months to seconds', () => {
    expect(unit.toSeconds()).toBe(2.628e6);
  });

  it('converts months to minutes', () => {
    expect(unit.toMinutes()).toBe(43800);
  });

  it('converts months to hours', () => {
    expect(unit.toHours()).toBe(730.001);
  });

  it('converts months to days', () => {
    expect(unit.toDays()).toBe(30.4167);
  });

  it('converts months to weeks', () => {
    expect(unit.toWeeks()).toBe(4.34524);
  });

  it('converts months to years', () => {
    expect(unit.toYears()).toBe(0.0833334);
  });

  it('converts months to decades', () => {
    expect(unit.toDecades()).toBe(0.00833334);
  });

  it('converts months to centuries', () => {
    expect(unit.toCenturies()).toBe(0.000833334);
  });
});
