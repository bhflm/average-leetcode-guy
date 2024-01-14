import {describe, expect, test} from '@jest/globals';
import { productExceptSelf } from './product-except-self';

describe('productExceptSelf', () => {
  test('"[1,2,3,4] is [24,12,8,6]', () => {
    const result = productExceptSelf([1,2,3,4]);
    expect(result).toBe([24,12,8,6]);
  });

  // test('"[-1,1,0,-3,3] is [0,0,9,0,0]', () => {
  //   //Input: nums = [1,2,3,4]
  // // Output: [24,12,8,6]
  //   const result = productExceptSelf([-1,1,0,-3,3]);
  // });
});