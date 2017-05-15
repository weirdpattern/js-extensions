import indexOf from '../../lib/arrays/index-of';

describe('indexOf', () => {
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
});
