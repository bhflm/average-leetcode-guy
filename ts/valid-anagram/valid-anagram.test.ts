import {describe, expect, test} from '@jest/globals';
import { isAnagram } from '.';

describe('isAnagram', () => {
  test('"anagram" and "nagaram" should return true', () => {
    const result = isAnagram("anagram", "nagaram");
    expect(result).toBe(true);
  });
  test('"rat" and "car" should return false', () => {
    const result = isAnagram("rat", "car");
    expect(result).toBe(false);
  });
});