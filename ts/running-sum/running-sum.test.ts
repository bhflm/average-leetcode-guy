import {describe, expect, test} from '@jest/globals';
import { runningSum } from './';

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

describe('sum module', () => {
  test('[1,2,3,4] should output [1,3,6,10]', () => {
    const result = runningSum([1,2,3,4]);
    expect(result).toBe([1,3,6,10]);
  });
});