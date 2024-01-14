import {describe, expect, test} from '@jest/globals';
import { groupAnagrams } from './';

describe('groupAnagrams', () => {
  test.only('[""], => [[""]]', () => {
    const r = groupAnagrams([""]);
    expect(r).toStrictEqual([[""]]);
  });
  
  test.only('["", ""], => [["", ""]]', () => {
    const r = groupAnagrams(["", ""]);
    expect(r).toStrictEqual([["", ""]]);
  });

  test('["eat", "tea", "tan", "ate", "nat", "bat"] => [["bat"],["eat", "tea", "ate"],["tan","ate"]]', () => {
    const r = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
    const serializedStr = r.flat().sort().join('');
    const serializedEqual = [["bat"],["nat","tan"],["ate","eat","tea"]].flat().sort().join('');
    expect(serializedStr).toStrictEqual(serializedEqual);
  });

  test('["a"], => [["a"]]', () => {
    const r = groupAnagrams(["a"]);
    expect(r).toStrictEqual([["a"]]);
  });
});