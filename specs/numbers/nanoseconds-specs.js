import nanoseconds from '../../lib/numbers/nanoseconds';

describe('nanoseconds', () => {
  const unit = nanoseconds(1);

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

  it('returns the same nanoseconds when calling toNanoseconds()', () => {
    expect(unit.toNanoseconds()).toBe(1);
  });

  it('converts nanoseconds to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(0.001);
  });

  it('converts nanoseconds to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(1e-6);
  });

  it('converts nanoseconds to seconds', () => {
    expect(unit.toSeconds()).toBe(1e-9);
  });

  it('converts nanoseconds to minutes', () => {
    expect(unit.toMinutes()).toBe(1.6667e-11);
  });

  it('converts nanoseconds to hours', () => {
    expect(unit.toHours()).toBe(2.7778e-13);
  });

  it('converts nanoseconds to days', () => {
    expect(unit.toDays()).toBe(1.1574e-14);
  });

  it('converts nanoseconds to weeks', () => {
    expect(unit.toWeeks()).toBe(1.6534e-15);
  });

  it('converts nanoseconds to months', () => {
    expect(unit.toMonths()).toBe(3.8052e-16);
  });

  it('converts nanoseconds to years', () => {
    expect(unit.toYears()).toBe(3.171e-17);
  });

  it('converts nanoseconds to decades', () => {
    expect(unit.toDecades()).toBe(3.171e-18);
  });

  it('converts nanoseconds to centuries', () => {
    expect(unit.toCenturies()).toBe(3.171e-19);
  });
});
