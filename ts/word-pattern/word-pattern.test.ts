import {describe, expect, test} from '@jest/globals';
import { wordPattern } from '.';

describe('wordPattern', () => {
  test('"abba" and "cat dog dog cat" should return true', () => {
    const result = wordPattern("abba", "cat dog dog cat");
    expect(result).toBe(true);
  });
  test('"abba" and "dog dog dog dog" should return false', () => {
    const result = wordPattern("abba", "dog dog dog dog");
    expect(result).toBe(false);
  });
  test('"aaaa" and "cat dog dog cat" should return false', () => {
    const result = wordPattern("aaaa", "cat dog dog cat");
    expect(result).toBe(false);
  });
});