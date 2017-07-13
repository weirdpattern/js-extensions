/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import capitalize from '../../lib/strings/capitalize';

describe('capitalize', () => {
  it('returns the same value when length === 0', () => {
    expect(capitalize('')).toEqual('');
  });

  it('returns the same instance when length === 0', () => {
    const word = '';
    expect(capitalize(word)).toBe(word);
  });

  it('returns the same value when length > 0, but word contains only whitespaces', () => {
    expect(capitalize('  ')).toEqual('  ');
  });

  it('returns the same instance when length > 0, but word contains only whitespaces', () => {
    const word = '  ';
    expect(capitalize(word)).toBe(word);
  });

  it('capitalizes the first letter', () => {
    expect(capitalize('hello world')).toEqual('Hello world');
    expect(capitalize('hello world', false)).toEqual('Hello world');
  });

  it('capitalizes the first letter of each word', () => {
    expect(capitalize('hello world', true)).toEqual('Hello World');
    expect(capitalize('hello world from code', true)).toEqual('Hello World From Code');
  });

  it('throws exception when a non-string is passed', () => {
    expect(() => capitalize(null)).toThrow();
    expect(() => capitalize(void 0)).toThrow();

    expect(() => capitalize(true)).toThrow();
    expect(() => capitalize(0)).toThrow();
    expect(() => capitalize([])).toThrow();
    expect(() => capitalize({})).toThrow();

    expect(() => capitalize(true, true)).toThrow();
    expect(() => capitalize(0, true)).toThrow();
    expect(() => capitalize([], true)).toThrow();
    expect(() => capitalize({}, true)).toThrow();
  });

  it('throws exception when a non-boolean is passed', () => {
    expect(() => capitalize('hello world', null)).toThrow();

    expect(() => capitalize('hello world', 0)).toThrow();
    expect(() => capitalize('hello world', 'true')).toThrow();
    expect(() => capitalize('hello world', 'false')).toThrow();
    expect(() => capitalize('hello world', [])).toThrow();
    expect(() => capitalize('hello world', {})).toThrow();
  });
});
