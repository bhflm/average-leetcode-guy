import {describe, expect, test} from '@jest/globals';
import { maxProfit } from '.';

describe('maxProfit', () => {
  test('prices=[1,2] should return 1 ', () => {
    const result = maxProfit([1,2]);
    expect(result).toBe(1);
  });
  test('prices=[1,2,4] should return 3 ', () => {
    const result = maxProfit([1,2,4]);
    expect(result).toBe(3);
  });
});