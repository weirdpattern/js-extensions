import { clear, first, flatten, head, last, tail } from '../lib/arrays';

describe('clear', () => {
  it('clears the content of an array', () => {
    const array = [1, 2, 3, 4];
    expect(clear(array)).toEqual([1, 2, 3, 4]);
    expect(array).toEqual([]);
  });

  it('throws exception when a non-array is passed', () => {
    expect(() => clear(true)).toThrow();
    expect(() => clear(0)).toThrow();
    expect(() => clear('')).toThrow();
    expect(() => clear({})).toThrow();
  });
});

describe('first', () => {
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

describe('flatten', () => {
  it('returns a single array when non-array values are passed', () => {
    expect(flatten(true)).toEqual([true]);
    expect(flatten(true, false)).toEqual([true, false]);
    expect(flatten(0)).toEqual([0]);
    expect(flatten(0, 1)).toEqual([0, 1]);
    expect(flatten('')).toEqual(['']);
    expect(flatten('', 'a')).toEqual(['', 'a']);
  });

  it('returns the same array when a single array is passed', () => {
    expect(flatten([true, false, false])).toEqual([true, false, false]);
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    expect(flatten(['', 'a', 'b'])).toEqual(['', 'a', 'b']);
  });

  it('returns a flattened array when an array and non-arrays are passed', () => {
    expect(flatten([true, false, false], true, false)).toEqual([true, false, false, true, false]);
    expect(flatten([1, 2, 3], 4, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(flatten(['', 'a', 'b'], 'c', 'd')).toEqual(['', 'a', 'b', 'c', 'd']);
  });

  it('returns a flattened array when multiple arrays are passed', () => {
    expect(flatten([true, false, false], [true, false])).toEqual([true, false, false, true, false]);
    expect(flatten([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten(['', 'a', 'b'], ['c', 'd'])).toEqual(['', 'a', 'b', 'c', 'd']);
  });

  it('returns a flattened array when multiple arrays with sub-arrays are passed', () => {
    expect(flatten([true, [[false], false]], [[true], false])).toEqual([true, false, false, true, false]);
    expect(flatten([1, [[2], 3]], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten(['', [['a'], 'b']], ['c', 'd'])).toEqual(['', 'a', 'b', 'c', 'd']);
  });
});

describe('head', () => {
  it('returns the first element of an array', () => {
    expect(head([1, 2, 3, 4])).toBe(1);
  });

  it('ignores other parameters passed', () => {
    expect(head([1, 2, 3, 4], 2)).toEqual(1);
    expect(head([1, 2, 3, 4], 3)).toEqual(1);
    expect(head([1, 2, 3, 4], 4)).toEqual(1);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(head(array)).toEqual(1);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => head(true)).toThrow();
    expect(() => head(0)).toThrow();
    expect(() => head('')).toThrow();
    expect(() => head({})).toThrow();

    expect(() => head(true, 1)).toThrow();
    expect(() => head(0, 1)).toThrow();
    expect(() => head('', 1)).toThrow();
    expect(() => head({}, 1)).toThrow();
  });
});

describe('last', () => {
  it('returns the last element of an array', () => {
    expect(last([1, 2, 3, 4])).toBe(4);
    expect(last([1, 2, 3, 4], 1)).toBe(4);
  });

  it('returns the last n elements of an array', () => {
    expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(last([1, 2, 3, 4], 3)).toEqual([2, 3, 4]);
    expect(last([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });

  it('returns all elements of an array when the count exceeds the length', () => {
    expect(last([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    expect(last([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4]);
    expect(last([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4]);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(last(array, 2)).toEqual([3, 4]);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => last(true)).toThrow();
    expect(() => last(0)).toThrow();
    expect(() => last('')).toThrow();
    expect(() => last({})).toThrow();

    expect(() => last(true, 1)).toThrow();
    expect(() => last(0, 1)).toThrow();
    expect(() => last('', 1)).toThrow();
    expect(() => last({}, 1)).toThrow();
  });

  it('throws an exception when the count is less than 1', () => {
    expect(() => last([1, 2, 3, 4], 0)).toThrow();
    expect(() => last([1, 2, 3, 4], -1)).toThrow();
    expect(() => last([1, 2, 3, 4], -2)).toThrow();
  });
});

describe('tail', () => {
  it('returns the last element of an array', () => {
    expect(tail([1, 2, 3, 4])).toBe(4);
  });

  it('ignores other parameters passed', () => {
    expect(tail([1, 2, 3, 4], 2)).toEqual(4);
    expect(tail([1, 2, 3, 4], 3)).toEqual(4);
    expect(tail([1, 2, 3, 4], 4)).toEqual(4);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(tail(array)).toEqual(4);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => tail(true)).toThrow();
    expect(() => tail(0)).toThrow();
    expect(() => tail('')).toThrow();
    expect(() => tail({})).toThrow();

    expect(() => tail(true, 1)).toThrow();
    expect(() => tail(0, 1)).toThrow();
    expect(() => tail('', 1)).toThrow();
    expect(() => tail({}, 1)).toThrow();
  });
});
