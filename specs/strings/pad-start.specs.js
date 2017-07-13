/*
 * Copyright (c) 2017, Patricio Trevino
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import padStart from '../../lib/strings/pad-start';

describe('padStart', () => {
  it('returns the same value when length === 0', () => {
    expect(padStart('test', 0)).toEqual('test');
  });

  it('returns the same value when length < value.length', () => {
    expect(padStart('test', 3)).toEqual('test');
  });
});
