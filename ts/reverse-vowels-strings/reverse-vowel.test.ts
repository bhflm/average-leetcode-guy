import {describe, expect, test} from '@jest/globals';
import { reverseVowels } from './reverse-vowels';

describe('reverseVowels', () => {
  test('"hello is holle', () => {
    const result = reverseVowels("hello");
    expect(result).toBe("holle");
  });
  test('"leetcode is leotcede', () => {
    const result = reverseVowels("leetcode");
    expect(result).toBe("leotcede");
  });
});