import microseconds from '../../lib/numbers/microseconds';

describe('microseconds', () => {
  const unit = microseconds(1);

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

  it('returns the same microseconds when calling toMicroseconds()', () => {
    expect(unit.toMicroseconds()).toBe(1);
  });

  it('converts microseconds to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(1000);
  });

  it('converts microseconds to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(0.001);
  });

  it('converts microseconds to seconds', () => {
    expect(unit.toSeconds()).toBe(1e-6);
  });

  it('converts microseconds to minutes', () => {
    expect(unit.toMinutes()).toBe(1.6667e-8);
  });

  it('converts microseconds to hours', () => {
    expect(unit.toHours()).toBe(2.7778e-10);
  });

  it('converts microseconds to days', () => {
    expect(unit.toDays()).toBe(1.1574e-11);
  });

  it('converts microseconds to weeks', () => {
    expect(unit.toWeeks()).toBe(1.6534e-12);
  });

  it('converts microseconds to months', () => {
    expect(unit.toMonths()).toBe(3.8052e-13);
  });

  it('converts microseconds to years', () => {
    expect(unit.toYears()).toBe(3.171e-14);
  });

  it('converts microseconds to decades', () => {
    expect(unit.toDecades()).toBe(3.171e-15);
  });

  it('converts microseconds to centuries', () => {
    expect(unit.toCenturies()).toBe(3.171e-16);
  });
});
