import assert from './assert';

/*
export function replaceAll(value, original, replacement) {
  assert(typeof value === 'string', 'Expecting a string');

  let replaced = value.replace(original, replacement);
  while (replaced.indexOf(original)) {
    replaced = replaced.replace(original, replacement);
  }

  return replaced;
}
*/

/**
 * Capitalizes the first word of the given string.
 * @param   {string}  value              the value to be capitilized.
 * @param   {boolean} [allWords = false] a flag indicating if all words needs to be capitalized.
 * @returns {string}                     the capitalized string.
 * @throws  {Error}                      when `value` is not a string.
 *
 * @public
 * @function
 *
 * @example
 * capitalize('hi');
 * // Hi
 *
 * capitalize('the fox jumps');
 * // The fox jumps
 *
 * capitalize('Hello World');
 * // Hello World
 *
 * capitalize('hello world');
 * // Hello world
 *
 * capitalize('hello world', true);
 * // Hello World
 */
export function capitalize(value, allWords = false) {
  assert(typeof value === 'string', 'Expecting a string');

  if (value.length === 0) return value;
  if (!allWords) {
    return value.substring(0, 1).toUpperCase() + value.slice(1);
  }

  const words = value.replace(/\s+/g, ' ').split(' ');

  let capitalized = capitalize(words.shift());
  while (words.length) {
    capitalized += capitalize(words.shift());
  }

  return capitalized;
}

/**
 * Converts the given string to camelCase.
 * @param   {string} value the value to be converted to camelCase.
 * @returns {string}       the same string in camelCase format.
 *
 * @public
 * @function
 *
 * @example
 * toCamelCase('hi');
 * // hi
 *
 * toCamelCase('the fox jumps');
 * // theFoxJumps
 *
 * toCamelCase('Hello World');
 * // helloWorld
 */
export function toCamelCase(value) {
  assert(typeof value === 'string', 'Expecting a string');

  if (value.length === 0) return value;

  const words = value.replace(/\s+/g, ' ').split(' ');

  let camel = toCamelCase(words.shift());
  while (words.length) {
    camel += capitalize(words.shift());
  }

  return camel;
}
