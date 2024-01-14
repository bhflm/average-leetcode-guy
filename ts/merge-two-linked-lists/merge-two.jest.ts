import {describe, expect, test} from '@jest/globals';
import { mergeTwoLists } from '.';

describe('mergeTwoLists', () => {
  test('list1 = [1,2,4], list2=[1,3,4]', () => {
    const list1 = [1,2,4];
    const list2 = [1,3,4];
    const result = mergeTwoLists(list1, list2);
  });
});