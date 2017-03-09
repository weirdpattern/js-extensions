import {
  clear,
  first,
  flatten,
  head
} from '../lib/array-extensions';

describe('clear', () => {
  it('clears the content of an array', () => {
    const array = [1, 2, 3, 4];
    expect(clear(array)).toEqual([1, 2, 3, 4]);
    expect(array).toEqual([]);
  });

  it('throws exception when a non-array is passed', () => {
    expect(() => { clear(true); }).toThrow();
    expect(() => { clear(0); }).toThrow();
    expect(() => { clear(''); }).toThrow();
    expect(() => { clear({}); }).toThrow();
  });
});

describe('Array.clear', () => {
  it('clears the content of an array', () => {
    const array = [1, 2, 3, 4];
    expect(Array.clear(array)).toEqual([1, 2, 3, 4]);
    expect(array).toEqual([]);
  });

  it('throws exception when a non-array is passed', () => {
    expect(() => { Array.clear(true); }).toThrow();
    expect(() => { Array.clear(0); }).toThrow();
    expect(() => { Array.clear(''); }).toThrow();
    expect(() => { Array.clear({}); }).toThrow();
  });
});

describe('[].clear', () => {
  it('clears the content of an array', () => {
    const array = [1, 2, 3, 4];
    expect(array.clear()).toEqual([1, 2, 3, 4]);
    expect(array).toEqual([]);
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
    expect(() => { first(true); }).toThrow();
    expect(() => { first(0); }).toThrow();
    expect(() => { first(''); }).toThrow();
    expect(() => { first({}); }).toThrow();

    expect(() => { first(true, 1); }).toThrow();
    expect(() => { first(0, 1); }).toThrow();
    expect(() => { first('', 1); }).toThrow();
    expect(() => { first({}, 1); }).toThrow();
  });

  it('throws an exception when the count is less than 1', () => {
    expect(() => { first([1, 2, 3, 4], 0); }).toThrow();
    expect(() => { first([1, 2, 3, 4], -1); }).toThrow();
    expect(() => { first([1, 2, 3, 4], -2); }).toThrow();
  });
});

describe('Array.first', () => {
  it('returns the first element of an array', () => {
    expect(Array.first([1, 2, 3, 4])).toBe(1);
    expect(Array.first([1, 2, 3, 4], 1)).toBe(1);
  });

  it('returns the first n elements of an array', () => {
    expect(Array.first([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(Array.first([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
    expect(Array.first([1, 2, 3, 4], 4)).toEqual([1, 2, 3, 4]);
  });

  it('returns all elements of an array when the count exceeds the length', () => {
    expect(Array.first([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    expect(Array.first([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4]);
    expect(Array.first([1, 2, 3, 4], 7)).toEqual([1, 2, 3, 4]);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(Array.first(array, 2)).toEqual([1, 2]);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => { Array.first(true); }).toThrow();
    expect(() => { Array.first(0); }).toThrow();
    expect(() => { Array.first(''); }).toThrow();
    expect(() => { Array.first({}); }).toThrow();

    expect(() => { Array.first(true, 1); }).toThrow();
    expect(() => { Array.first(0, 1); }).toThrow();
    expect(() => { Array.first('', 1); }).toThrow();
    expect(() => { Array.first({}, 1); }).toThrow();
  });

  it('throws an exception when the count is less than 1', () => {
    expect(() => { Array.first([1, 2, 3, 4], 0); }).toThrow();
    expect(() => { Array.first([1, 2, 3, 4], -1); }).toThrow();
    expect(() => { Array.first([1, 2, 3, 4], -2); }).toThrow();
  });
});

describe('[].first', () => {
  it('returns the first element of an array', () => {
    const array = [1, 2, 3, 4];
    expect(array.first()).toBe(1);
    expect(array.first(1)).toBe(1);
  });

  it('returns the first n elements of an array', () => {
    const array = [1, 2, 3, 4];
    expect(array.first(2)).toEqual([1, 2]);
    expect(array.first(3)).toEqual([1, 2, 3]);
    expect(array.first(4)).toEqual([1, 2, 3, 4]);
  });

  it('returns all elements of an array when the count exceeds the length', () => {
    const array = [1, 2, 3, 4];
    expect(array.first(5)).toEqual([1, 2, 3, 4]);
    expect(array.first(6)).toEqual([1, 2, 3, 4]);
    expect(array.first(7)).toEqual([1, 2, 3, 4]);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(array.first(2)).toEqual([1, 2]);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when the count is less than 1', () => {
    const array = [1, 2, 3, 4];
    expect(() => { array.first(0); }).toThrow();
    expect(() => { array.first(-1); }).toThrow();
    expect(() => { array.first(-2); }).toThrow();
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
    expect(() => { head(true); }).toThrow();
    expect(() => { head(0); }).toThrow();
    expect(() => { head(''); }).toThrow();
    expect(() => { head({}); }).toThrow();

    expect(() => { head(true, 1); }).toThrow();
    expect(() => { head(0, 1); }).toThrow();
    expect(() => { head('', 1); }).toThrow();
    expect(() => { head({}, 1); }).toThrow();
  });
});

describe('Array.head', () => {
  it('returns the first element of an array', () => {
    expect(Array.head([1, 2, 3, 4])).toBe(1);
  });

  it('ignores other parameters passed', () => {
    expect(Array.head([1, 2, 3, 4], 2)).toEqual(1);
    expect(Array.head([1, 2, 3, 4], 3)).toEqual(1);
    expect(Array.head([1, 2, 3, 4], 4)).toEqual(1);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(Array.head(array)).toEqual(1);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => { Array.head(true); }).toThrow();
    expect(() => { Array.head(0); }).toThrow();
    expect(() => { Array.head(''); }).toThrow();
    expect(() => { Array.head({}); }).toThrow();

    expect(() => { Array.head(true, 1); }).toThrow();
    expect(() => { Array.head(0, 1); }).toThrow();
    expect(() => { Array.head('', 1); }).toThrow();
    expect(() => { Array.head({}, 1); }).toThrow();
  });
});

describe('[].head', () => {
  it('returns the first element of an array', () => {
    const array = [1, 2, 3, 4];
    expect(array.head()).toBe(1);
  });

  it('ignores other parameters passed', () => {
    const array = [1, 2, 3, 4];
    expect(array.head(2)).toEqual(1);
    expect(array.head(3)).toEqual(1);
    expect(array.head(4)).toEqual(1);
  });

  it('does not modify the original array', () => {
    const array = [1, 2, 3, 4];
    expect(array.head()).toEqual(1);
    expect(array).toEqual([1, 2, 3, 4]);
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
    expect(
      flatten([true, [[false], false]], [[true], false])
    ).toEqual([true, false, false, true, false]);
    expect(flatten([1, [[2], 3]], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten(['', [['a'], 'b']], ['c', 'd'])).toEqual(['', 'a', 'b', 'c', 'd']);
  });
});

describe('Array.flatten', () => {
  it('returns a single array when non-array values are passed', () => {
    expect(Array.flatten(true)).toEqual([true]);
    expect(Array.flatten(true, false)).toEqual([true, false]);
    expect(Array.flatten(0)).toEqual([0]);
    expect(Array.flatten(0, 1)).toEqual([0, 1]);
    expect(Array.flatten('')).toEqual(['']);
    expect(Array.flatten('', 'a')).toEqual(['', 'a']);
  });

  it('returns the same array when a single array is passed', () => {
    expect(Array.flatten([true, false, false])).toEqual([true, false, false]);
    expect(Array.flatten([1, 2, 3])).toEqual([1, 2, 3]);
    expect(Array.flatten(['', 'a', 'b'])).toEqual(['', 'a', 'b']);
  });

  it('returns a flattened array when an array and non-arrays are passed', () => {
    expect(
      Array.flatten([true, false, false], true, false)
    ).toEqual([true, false, false, true, false]);
    expect(Array.flatten([1, 2, 3], 4, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(Array.flatten(['', 'a', 'b'], 'c', 'd')).toEqual(['', 'a', 'b', 'c', 'd']);
  });

  it('returns a flattened array when multiple arrays are passed', () => {
    expect(
      Array.flatten([true, false, false], [true, false])
    ).toEqual([true, false, false, true, false]);
    expect(Array.flatten([1, 2, 3], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(Array.flatten(['', 'a', 'b'], ['c', 'd'])).toEqual(['', 'a', 'b', 'c', 'd']);
  });

  it('returns a flattened array when multiple arrays with sub-arrays are passed', () => {
    expect(
      Array.flatten([true, [[false], false]], [[true], false])
    ).toEqual([true, false, false, true, false]);
    expect(Array.flatten([1, [[2], 3]], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(Array.flatten(['', [['a'], 'b']], ['c', 'd'])).toEqual(['', 'a', 'b', 'c', 'd']);
  });
});

describe('[].flatten', () => {
  it('flattens the current array when no values are passed', () => {
    expect([true].flatten()).toEqual([true]);
    expect([true, false].flatten()).toEqual([true, false]);
    expect([true, [false]].flatten()).toEqual([true, false]);
    expect([true, [false, [true]]].flatten()).toEqual([true, false, true]);
    expect([0].flatten()).toEqual([0]);
    expect([0, 1].flatten()).toEqual([0, 1]);
    expect([0, [1]].flatten()).toEqual([0, 1]);
    expect([0, [1, [2]]].flatten()).toEqual([0, 1, 2]);
    expect([''].flatten()).toEqual(['']);
    expect(['', 'a'].flatten()).toEqual(['', 'a']);
    expect(['', ['a']].flatten()).toEqual(['', 'a']);
    expect(['', ['a', ['b']]].flatten()).toEqual(['', 'a', 'b']);
  });

  it('returns a single array when non-array values are passed', () => {
    expect([true].flatten(true)).toEqual([true, true]);
    expect([true, false].flatten(true, false)).toEqual([true, false, true, false]);
    expect([0].flatten(0)).toEqual([0, 0]);
    expect([0, 1].flatten(0, 1)).toEqual([0, 1, 0, 1]);
    expect([''].flatten('')).toEqual(['', '']);
    expect(['', 'a'].flatten('', 'a')).toEqual(['', 'a', '', 'a']);
  });

  it('returns the same array when a single array is passed', () => {
    expect([true].flatten([true, false, false])).toEqual([true, true, false, false]);
    expect([1].flatten([1, 2, 3])).toEqual([1, 1, 2, 3]);
    expect([''].flatten(['', 'a', 'b'])).toEqual(['', '', 'a', 'b']);
  });

  it('returns a flattened array when an array and non-arrays are passed', () => {
    expect(
      [true].flatten([true, false, false], true, false)
    ).toEqual([true, true, false, false, true, false]);
    expect([1].flatten([1, 2, 3], 4, 5)).toEqual([1, 1, 2, 3, 4, 5]);
    expect([''].flatten(['', 'a', 'b'], 'c', 'd')).toEqual(['', '', 'a', 'b', 'c', 'd']);
  });

  it('returns a flattened array when multiple arrays are passed', () => {
    expect(
      [true].flatten([true, false, false], [true, false])
    ).toEqual([true, true, false, false, true, false]);
    expect([1].flatten([1, 2, 3], [4, 5])).toEqual([1, 1, 2, 3, 4, 5]);
    expect([''].flatten(['', 'a', 'b'], ['c', 'd'])).toEqual(['', '', 'a', 'b', 'c', 'd']);
  });

  it('returns a flattened array when multiple arrays with sub-arrays are passed', () => {
    expect(
      [true].flatten([true, [[false], false]], [[true], false])
    ).toEqual([true, true, false, false, true, false]);
    expect([1].flatten([1, [[2], 3]], [4, 5])).toEqual([1, 1, 2, 3, 4, 5]);
    expect([''].flatten(['', [['a'], 'b']], ['c', 'd'])).toEqual(['', '', 'a', 'b', 'c', 'd']);
  });
});
