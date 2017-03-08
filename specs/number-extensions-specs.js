import '../lib/number-extensions';

describe('seconds', () => {
  it('converts seconds to milliseconds', () => {
    const count = 1;
    expect(count.seconds).toBe(1000);
    expect(count.minutes).toBe(60000);
    expect(count.hours).toBe(3600000);
    expect(count.days).toBe(86400000);
  });
});
