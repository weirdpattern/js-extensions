import first from '../../lib/arrays/first';

describe('first', () => {
  it('returns undefined when the array is empty', () => {
    expect(first([])).toBe(void 0);
  });

  it('returns the first element of an array', () => {
    expect(first([1, 2, 3, 4])).toBe(1);
    expect(first([1, 2, 3, 4], 1)).toBe(1);
  });

  it('returns the first n elements of an array', () => {
    expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(first([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
    expect(first([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });

  it('returns all elements of an array when the count exceeds the length', () => {
    expect(first([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    expect(first([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4]);
    expect(first([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4]);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(first(array, 2)).toEqual([1, 2]);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => first(null)).toThrow();
    expect(() => first(void 0)).toThrow();

    expect(() => first(true)).toThrow();
    expect(() => first(0)).toThrow();
    expect(() => first('')).toThrow();
    expect(() => first({})).toThrow();

    expect(() => first(true, 1)).toThrow();
    expect(() => first(0, 1)).toThrow();
    expect(() => first('', 1)).toThrow();
    expect(() => first({}, 1)).toThrow();
  });

  it('throws an exception when the count is less than 1', () => {
    expect(() => first([1, 2, 3, 4], 0)).toThrow();
    expect(() => first([1, 2, 3, 4], -1)).toThrow();
    expect(() => first([1, 2, 3, 4], -2)).toThrow();
  });
});
