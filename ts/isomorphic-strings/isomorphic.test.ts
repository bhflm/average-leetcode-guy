import {describe, expect, test} from '@jest/globals';
import { isIsomorphic } from '.';

describe('is isomorphic', () => {
  test('"paper" and "title" should return true', () => {
    const result = isIsomorphic("paper", "title");
    expect(result).toBe(true);
  });
  test('"foo" and "bar" should return false', () => {
    const result = isIsomorphic("foo", "bar");
    expect(result).toBe(false);
  });
});