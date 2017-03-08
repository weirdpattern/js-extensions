import { flatten } from '../lib/array-extensions';

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
