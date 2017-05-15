import isEven from '../../lib/numbers/is-even';

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
