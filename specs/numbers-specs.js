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
  centuries
} from '../lib/numbers';

describe('nanoseconds', () => {
  const unit = nanoseconds(1);

  it('creates a valid instance of the converter', () => {
    expect(Object.getOwnPropertyNames(unit)).toEqual(
      [
        'toNanoseconds', 'toMicroseconds', 'toMilliseconds', 'toSeconds', 'toMinutes',
        'toHours', 'toDays', 'toWeeks', 'toMonths', 'toYears', 'toDecades', 'toCenturies'
      ]
    );
  });

  it('returns the same nanoseconds when calling toNanoseconds()', () => {
    expect(unit.toNanoseconds()).toBe(1);
  });

  it('converts nanoseconds to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(0.001.toPrecision(4));
  });

  it('converts nanoseconds to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(1e-6.toPrecision(4));
  });

  it('converts nanoseconds to seconds', () => {
    expect(unit.toSeconds()).toBe(1e-9.toPrecision(4));
  });

  it('converts nanoseconds to minutes', () => {
    expect(unit.toMinutes()).toBe(1.6667e-11.toPrecision(4));
  });

  it('converts nanoseconds to hours', () => {
    expect(unit.toHours()).toBe(2.7778e-13.toPrecision(4));
  });

  it('converts nanoseconds to days', () => {
    expect(unit.toDays()).toBe(1.1574e-14.toPrecision(4));
  });

  it('converts nanoseconds to weeks', () => {
    expect(unit.toWeeks()).toBe(1.6534e-15.toPrecision(4));
  });

  it('converts nanoseconds to months', () => {
    expect(unit.toMonths()).toBe(3.8052e-16.toPrecision(4));
  });

  it('converts nanoseconds to years', () => {
    expect(unit.toYears()).toBe(3.171e-17.toPrecision(4));
  });

  it('converts nanoseconds to decades', () => {
    expect(unit.toDecades()).toBe(3.171e-18.toPrecision(4));
  });

  it('converts nanoseconds to centuries', () => {
    expect(unit.toCenturies()).toBe(3.171e-19.toPrecision(4));
  });
});

describe('microseconds', () => {
  const unit = microseconds(1);

  it('creates a valid instance of the converter', () => {
    expect(Object.getOwnPropertyNames(unit)).toEqual(
      [
        'toNanoseconds', 'toMicroseconds', 'toMilliseconds', 'toSeconds', 'toMinutes',
        'toHours', 'toDays', 'toWeeks', 'toMonths', 'toYears', 'toDecades', 'toCenturies'
      ]
    );
  });

  it('returns the same microseconds when calling toMicroseconds()', () => {
    expect(unit.toMicroseconds()).toBe(1);
  });

  it('converts microseconds to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(1000);
  });

  it('converts microseconds to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(0.001.toPrecision(4));
  });

  it('converts microseconds to seconds', () => {
    expect(unit.toSeconds()).toBe(1e-6.toPrecision(4));
  });

  it('converts microseconds to minutes', () => {
    expect(unit.toMinutes()).toBe(1.6667e-8.toPrecision(4));
  });

  it('converts microseconds to hours', () => {
    expect(unit.toHours()).toBe(2.7778e-10.toPrecision(4));
  });

  it('converts microseconds to days', () => {
    expect(unit.toDays()).toBe(1.1574e-11.toPrecision(4));
  });

  it('converts microseconds to weeks', () => {
    expect(unit.toWeeks()).toBe(1.6534e-12.toPrecision(4));
  });

  it('converts microseconds to months', () => {
    expect(unit.toMonths()).toBe(3.8052e-13.toPrecision(4));
  });

  it('converts microseconds to years', () => {
    expect(unit.toYears()).toBe(3.171e-14.toPrecision(4));
  });

  it('converts microseconds to decades', () => {
    expect(unit.toDecades()).toBe(3.171e-15.toPrecision(4));
  });

  it('converts microseconds to centuries', () => {
    expect(unit.toCenturies()).toBe(3.171e-16.toPrecision(4));
  });
});

describe('milliseconds', () => {
  const unit = milliseconds(1);

  it('creates a valid instance of the converter', () => {
    expect(Object.getOwnPropertyNames(unit)).toEqual(
      [
        'toNanoseconds', 'toMicroseconds', 'toMilliseconds', 'toSeconds', 'toMinutes',
        'toHours', 'toDays', 'toWeeks', 'toMonths', 'toYears', 'toDecades', 'toCenturies'
      ]
    );
  });

  it('returns the same milliseconds when calling toMilliseconds()', () => {
    expect(unit.toMilliseconds()).toBe(1);
  });

  it('converts milliseconds to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(1e+6);
  });

  it('converts milliseconds to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(1000);
  });

  it('converts milliseconds to seconds', () => {
    expect(unit.toSeconds()).toBe(0.001.toPrecision(4));
  });

  it('converts milliseconds to minutes', () => {
    expect(unit.toMinutes()).toBe(1.66667e-5.toPrecision(4));
  });

  it('converts milliseconds to hours', () => {
    expect(unit.toHours()).toBe(2.7778e-7.toPrecision(4));
  });

  it('converts milliseconds to days', () => {
    expect(unit.toDays()).toBe(1.15741e-8.toPrecision(4));
  });

  it('converts milliseconds to weeks', () => {
    expect(unit.toWeeks()).toBe(1.6534e-9.toPrecision(4));
  });

  it('converts milliseconds to months', () => {
    expect(unit.toMonths()).toBe(3.8052e-10.toPrecision(4));
  });

  it('converts milliseconds to years', () => {
    expect(unit.toYears()).toBe(3.171e-11.toPrecision(4));
  });

  it('converts milliseconds to decades', () => {
    expect(unit.toDecades()).toBe(3.171e-12.toPrecision(4));
  });

  it('converts milliseconds to centuries', () => {
    expect(unit.toCenturies()).toBe(3.171e-13.toPrecision(4));
  });
});

describe('seconds', () => {
  const unit = seconds(1);

  it('creates a valid instance of the converter', () => {
    expect(Object.getOwnPropertyNames(unit)).toEqual(
      [
        'toNanoseconds', 'toMicroseconds', 'toMilliseconds', 'toSeconds', 'toMinutes',
        'toHours', 'toDays', 'toWeeks', 'toMonths', 'toYears', 'toDecades', 'toCenturies'
      ]
    );
  });

  it('returns the same seconds when calling toSeconds()', () => {
    expect(unit.toSeconds()).toBe(1);
  });

  it('converts seconds to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(1e+9);
  });

  it('converts seconds to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(1e+6);
  });

  it('converts seconds to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(1000);
  });

  it('converts seconds to minutes', () => {
    expect(unit.toMinutes()).toBe(0.0166667.toPrecision(4));
  });

  it('converts seconds to hours', () => {
    expect(unit.toHours()).toBe(0.000277778.toPrecision(4));
  });

  it('converts seconds to days', () => {
    expect(unit.toDays()).toBe(1.1574e-5.toPrecision(4));
  });

  it('converts seconds to weeks', () => {
    expect(unit.toWeeks()).toBe(1.6534e-6.toPrecision(4));
  });

  it('converts seconds to months', () => {
    expect(unit.toMonths()).toBe(3.8052e-7.toPrecision(4));
  });

  it('converts seconds to years', () => {
    expect(unit.toYears()).toBe(3.171e-8.toPrecision(4));
  });

  it('converts seconds to decades', () => {
    expect(unit.toDecades()).toBe(3.171e-9.toPrecision(4));
  });

  it('converts seconds to centuries', () => {
    expect(unit.toCenturies()).toBe(3.171e-10.toPrecision(4));
  });
});

describe('minutes', () => {
  const unit = minutes(1);

  it('creates a valid instance of the converter', () => {
    expect(Object.getOwnPropertyNames(unit)).toEqual(
      [
        'toNanoseconds', 'toMicroseconds', 'toMilliseconds', 'toSeconds', 'toMinutes',
        'toHours', 'toDays', 'toWeeks', 'toMonths', 'toYears', 'toDecades', 'toCenturies'
      ]
    );
  });

  it('returns the same minutes when calling toMinutes()', () => {
    expect(unit.toMinutes()).toBe(1);
  });

  it('converts minutes to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(6e+10);
  });

  it('converts minutes to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(6e+7);
  });

  it('converts minutes to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(60000);
  });

  it('converts minutes to seconds', () => {
    expect(unit.toSeconds()).toBe(60);
  });

  it('converts minutes to hours', () => {
    expect(unit.toHours()).toBe(0.0166667.toPrecision(4));
  });

  it('converts minutes to days', () => {
    expect(unit.toDays()).toBe(0.000694444.toPrecision(4));
  });

  it('converts minutes to weeks', () => {
    expect(unit.toWeeks()).toBe(9.9206e-5.toPrecision(4));
  });

  it('converts minutes to months', () => {
    expect(unit.toMonths()).toBe(2.2831e-5.toPrecision(4));
  });

  it('converts minutes to years', () => {
    expect(unit.toYears()).toBe(1.9026e-6.toPrecision(4));
  });

  it('converts minutes to decades', () => {
    expect(unit.toDecades()).toBe(1.9026e-7.toPrecision(4));
  });

  it('converts minutes to centuries', () => {
    expect(unit.toCenturies()).toBe(1.9026e-8.toPrecision(4));
  });
});

describe('hours', () => {
  const unit = hours(1);

  it('creates a valid instance of the converter', () => {
    expect(Object.getOwnPropertyNames(unit)).toEqual(
      [
        'toNanoseconds', 'toMicroseconds', 'toMilliseconds', 'toSeconds', 'toMinutes',
        'toHours', 'toDays', 'toWeeks', 'toMonths', 'toYears', 'toDecades', 'toCenturies'
      ]
    );
  });

  it('returns the same hours when calling toHours()', () => {
    expect(unit.toHours()).toBe(1);
  });

  it('converts hours to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(3.6e+12);
  });

  it('converts hours to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(3.6e+9);
  });

  it('converts hours to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(3.6e+6);
  });

  it('converts hours to seconds', () => {
    expect(unit.toSeconds()).toBe(3600);
  });

  it('converts hours to minutes', () => {
    expect(~~unit.toMinutes()).toBe(60);
  });

  it('converts hours to days', () => {
    expect(unit.toDays()).toBe(0.0416667.toPrecision(4));
  });

  it('converts hours to weeks', () => {
    expect(unit.toWeeks()).toBe(0.00595238.toPrecision(4));
  });

  it('converts hours to months', () => {
    expect(unit.toMonths()).toBe(0.00136986.toPrecision(4));
  });

  it('converts hours to years', () => {
    expect(unit.toYears()).toBe(0.000114155.toPrecision(4));
  });

  it('converts hours to decades', () => {
    expect(unit.toDecades()).toBe(1.1416e-5.toPrecision(4));
  });

  it('converts hours to centuries', () => {
    expect(unit.toCenturies()).toBe(1.1416e-6.toPrecision(4));
  });
});

describe('days', () => {
  const unit = days(1);

  it('creates a valid instance of the converter', () => {
    expect(Object.getOwnPropertyNames(unit)).toEqual(
      [
        'toNanoseconds', 'toMicroseconds', 'toMilliseconds', 'toSeconds', 'toMinutes',
        'toHours', 'toDays', 'toWeeks', 'toMonths', 'toYears', 'toDecades', 'toCenturies'
      ]
    );
  });

  it('returns the same days when calling toDays()', () => {
    expect(unit.toDays()).toBe(1);
  });

  it('converts days to nanoseconds', () => {
    expect(unit.toNanoseconds()).toBe(8.64e+13);
  });

  it('converts days to microseconds', () => {
    expect(unit.toMicroseconds()).toBe(8.64e+10);
  });

  it('converts days to milliseconds', () => {
    expect(unit.toMilliseconds()).toBe(8.64e+7);
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
    expect(unit.toWeeks()).toBe(0.142857.toPrecision(4));
  });

  it('converts days to months', () => {
    expect(unit.toMonths()).toBe(0.032876643423.toPrecision(4));
  });

  it('converts days to years', () => {
    expect(unit.toYears()).toBe(0.00273973.toPrecision(4));
  });

  it('converts days to decades', () => {
    expect(unit.toDecades()).toBe(0.000273973.toPrecision(4));
  });

  it('converts days to centuries', () => {
    expect(unit.toCenturies()).toBe(2.7397e-5.toPrecision(4));
  });
});
