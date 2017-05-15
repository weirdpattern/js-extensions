import indexOf from '../../lib/arrays/index-of';

describe('indexOf', () => {
  const array = ['hello', 'World', 'from', 'cODe'];

  it('returns -1 when the element does not exist in the array', () => {
    expect(indexOf(array, 'spider')).toEqual(-1);
  });

  it('returns -1 when the element exists in the array, but with different casing', () => {
    expect(indexOf(array, 'Hello')).toEqual(-1);
    expect(indexOf(array, 'world')).toEqual(-1);
    expect(indexOf(array, 'fRom')).toEqual(-1);
    expect(indexOf(array, 'code')).toEqual(-1);
  });

  it('returns the index of the element when the element exits in the array', () => {
    expect(indexOf(array, 'hello')).toEqual(0);
    expect(indexOf(array, 'World')).toEqual(1);
    expect(indexOf(array, 'from')).toEqual(2);
    expect(indexOf(array, 'cODe')).toEqual(3);

    expect(indexOf(array, 'hello', false)).toEqual(0);
    expect(indexOf(array, 'World', false)).toEqual(1);
    expect(indexOf(array, 'from', false)).toEqual(2);
    expect(indexOf(array, 'cODe', false)).toEqual(3);
  });

  it('returns the index of the element when the element exits in the array and the casing is ignored', () => {
    expect(indexOf(array, 'Hello', true)).toEqual(0);
    expect(indexOf(array, 'world', true)).toEqual(1);
    expect(indexOf(array, 'fRom', true)).toEqual(2);
    expect(indexOf(array, 'code', true)).toEqual(3);
  });

  it('throws an exception when a non-array is passed', () => {
    expect(() => indexOf(null)).toThrow();
    expect(() => indexOf(void 0)).toThrow();

    expect(() => indexOf(true)).toThrow();
    expect(() => indexOf(0)).toThrow();
    expect(() => indexOf('')).toThrow();
    expect(() => indexOf({})).toThrow();

    expect(() => indexOf(true, 1)).toThrow();
    expect(() => indexOf(0, 1)).toThrow();
    expect(() => indexOf('', 1)).toThrow();
    expect(() => indexOf({}, 1)).toThrow();
  });

  it('throws exception when a non-boolean is passed', () => {
    expect(() => indexOf(array, 'hello', null)).toThrow();

    expect(() => indexOf(array, 'hello', 0)).toThrow();
    expect(() => indexOf(array, 'hello', 'true')).toThrow();
    expect(() => indexOf(array, 'hello', 'false')).toThrow();
    expect(() => indexOf(array, 'hello', [])).toThrow();
    expect(() => indexOf(array, 'hello', {})).toThrow();
  });
});
