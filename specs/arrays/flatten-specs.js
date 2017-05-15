import flatten from '../../lib/arrays/flatten';

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
