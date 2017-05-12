import {
  nanoseconds,
  microseconds,
  milliseconds,
  seconds,
  minutes,
  hours,
  days,
  weeks,
  months,
  years,
  decades,
  centuries,
  isEven,
  isOdd,
} from '../lib/numbers';

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

describe('seconds', () => {
  const unit = seconds(1);

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

  it('returns the same seconds when calling toSeconds()', () => {
    expect(unit.toSeconds()).toBe(1);
  });

  it('converts seconds to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(1e9);
  });

  it('converts seconds to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(1e6);
  });

  it('converts seconds to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(1000);
  });

  it('converts seconds to minutes', () => {
    expect(unit.toMinutes()).toBe(0.0166667);
  });

  it('converts seconds to hours', () => {
    expect(unit.toHours()).toBe(0.000277778);
  });

  it('converts seconds to days', () => {
    expect(unit.toDays()).toBe(1.1574e-5);
  });

  it('converts seconds to weeks', () => {
    expect(unit.toWeeks()).toBe(1.6534e-6);
  });

  it('converts seconds to months', () => {
    expect(unit.toMonths()).toBe(3.8052e-7);
  });

  it('converts seconds to years', () => {
    expect(unit.toYears()).toBe(3.171e-8);
  });

  it('converts seconds to decades', () => {
    expect(unit.toDecades()).toBe(3.171e-9);
  });

  it('converts seconds to centuries', () => {
    expect(unit.toCenturies()).toBe(3.171e-10);
  });
});

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

describe('days', () => {
  const unit = days(1);

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

  it('returns the same days when calling toDays()', () => {
    expect(unit.toDays()).toBe(1);
  });

  it('converts days to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(8.64e13);
  });

  it('converts days to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(8.64e10);
  });

  it('converts days to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(8.64e7);
  });

  it('converts days to seconds', () => {
    expect(unit.toSeconds()).toBe(86400);
  });

  it('converts days to minutes', () => {
    expect(unit.toMinutes()).toBe(1440);
  });

  it('converts days to hours', () => {
    expect(unit.toHours()).toBe(24);
  });

  it('converts days to weeks', () => {
    expect(unit.toWeeks()).toBe(0.142857);
  });

  it('converts days to months', () => {
    expect(unit.toMonths()).toBe(0.0328767);
  });

  it('converts days to years', () => {
    expect(unit.toYears()).toBe(0.00273973);
  });

  it('converts days to decades', () => {
    expect(unit.toDecades()).toBe(0.000273973);
  });

  it('converts days to centuries', () => {
    expect(unit.toCenturies()).toBe(2.7397e-5);
  });
});

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

describe('isEven', () => {
  it('returns true when an even number is passed', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);
    expect(isEven(8)).toBe(true);
    expect(isEven(2.0)).toBe(true);
    expect(isEven(4.0)).toBe(true);
    expect(isEven(6.0)).toBe(true);
    expect(isEven(8.0)).toBe(true);
  });

  it('returns false when an odd number is passed', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(1.0)).toBe(false);
    expect(isEven(3.0)).toBe(false);
    expect(isEven(5.0)).toBe(false);
    expect(isEven(7.0)).toBe(false);
    expect(isEven(1.1)).toBe(false);
    expect(isEven(3.3)).toBe(false);
    expect(isEven(5.5)).toBe(false);
    expect(isEven(7.7)).toBe(false);
    expect(isEven(2.2)).toBe(false);
    expect(isEven(4.4)).toBe(false);
    expect(isEven(6.6)).toBe(false);
    expect(isEven(8.8)).toBe(false);
  });

  it('throws an exception when a non number is passed', () => {
    expect(() => isEven(true)).toThrow();
    expect(() => isEven('string')).toThrow();
    expect(() => isEven([])).toThrow();
    expect(() => isEven([1])).toThrow();
    expect(() => isEven([2])).toThrow();
    expect(() => isEven([1, 2])).toThrow();
    expect(() => isEven({})).toThrow();
  });
});

describe('isOdd', () => {
  it('returns true when an odd number is passed', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(1.0)).toBe(true);
    expect(isOdd(3.0)).toBe(true);
    expect(isOdd(5.0)).toBe(true);
    expect(isOdd(7.0)).toBe(true);
  });

  it('returns false when an even number is passed', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(8)).toBe(false);
    expect(isOdd(2.0)).toBe(false);
    expect(isOdd(4.0)).toBe(false);
    expect(isOdd(6.0)).toBe(false);
    expect(isOdd(8.0)).toBe(false);
    expect(isOdd(1.1)).toBe(false);
    expect(isOdd(3.3)).toBe(false);
    expect(isOdd(5.5)).toBe(false);
    expect(isOdd(7.7)).toBe(false);
    expect(isOdd(2.2)).toBe(false);
    expect(isOdd(4.4)).toBe(false);
    expect(isOdd(6.6)).toBe(false);
    expect(isOdd(8.8)).toBe(false);
  });

  it('throws an exception when a non number is passed', () => {
    expect(() => isOdd(true)).toThrow();
    expect(() => isOdd('string')).toThrow();
    expect(() => isOdd([])).toThrow();
    expect(() => isOdd([1])).toThrow();
    expect(() => isOdd([2])).toThrow();
    expect(() => isOdd([1, 2])).toThrow();
    expect(() => isOdd({})).toThrow();
  });
});
