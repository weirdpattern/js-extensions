import toCamelCase from '../../lib/strings/to-camelcase';

describe('toCamelCase', () => {
  it('returns the same value when length === 0', () => {
    expect(toCamelCase('')).toEqual('');
  });

  it('returns the same instance when length === 0', () => {
    const word = '';
    expect(toCamelCase(word)).toBe(word);
  });

  it('returns the same value when length > 0, but word contains only whitespaces', () => {
    expect(toCamelCase('  ')).toEqual('  ');
  });

  it('returns the same instance when length > 0, but word contains only whitespaces', () => {
    const word = '  ';
    expect(toCamelCase(word)).toBe(word);
  });

  it('returns the same word when first letter is lowercase', () => {
    expect(toCamelCase('hello')).toEqual('hello');
  });

  it('converts to camelcase single words', () => {
    expect(toCamelCase('Hello')).toEqual('hello');
  });

  it('converts to camelcase', () => {
    expect(toCamelCase('hello world')).toEqual('helloWorld');
  });

  it('throws exception when a non-string is passed', () => {
    expect(() => toCamelCase(null)).toThrow();
    expect(() => toCamelCase(void 0)).toThrow();

    expect(() => toCamelCase(true)).toThrow();
    expect(() => toCamelCase(0)).toThrow();
    expect(() => toCamelCase([])).toThrow();
    expect(() => toCamelCase({})).toThrow();
  });
});
