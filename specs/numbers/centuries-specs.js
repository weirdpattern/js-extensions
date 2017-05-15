import centuries from '../../lib/numbers/centuries';

describe('centuries', () => {
  const unit = centuries(1);

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

  it('returns the same centuries when calling toCenturies()', () => {
    expect(unit.toCenturies()).toBe(1);
  });

  it('converts centuries to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(3.154e18);
  });

  it('converts centuries to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(3.154e15);
  });

  it('converts centuries to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(3.154e12);
  });

  it('converts centuries to seconds', () => {
    expect(unit.toSeconds()).toBe(3.154e9);
  });

  it('converts centuries to minutes', () => {
    expect(unit.toMinutes()).toBe(5.256e7);
  });

  it('converts centuries to hours', () => {
    expect(unit.toHours()).toBe(876000);
  });

  it('converts centuries to days', () => {
    expect(unit.toDays()).toBe(36500);
  });

  it('converts centuries to weeks', () => {
    expect(unit.toWeeks()).toBe(5214.29);
  });

  it('converts centuries to months', () => {
    expect(unit.toMonths()).toBe(1200);
  });

  it('converts centuries to years', () => {
    expect(unit.toYears()).toBe(100);
  });

  it('converts centuries to decades', () => {
    expect(unit.toDecades()).toBe(10);
  });
});
