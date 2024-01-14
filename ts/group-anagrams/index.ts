// ["eat", "tea", "tan", "ate", "nat", "bat"] => [["bat"],["eat", "tea", "ate"],["tan","ate"]]

interface anagrams {
  [key: string]: string[];
};

export function groupAnagrams(strs: string[]): string[][] {
  const alreadyAdded: anagrams = {};

  for(const str of strs) {
    const key = str.split('').sort().join(''); // 'eat => aet'
    if (!(key in alreadyAdded)) {
      alreadyAdded[key] = [];
    }; 
    alreadyAdded[key].push(str);
  };

  return [...Object.values(alreadyAdded)]
};