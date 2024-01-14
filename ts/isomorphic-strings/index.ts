function iteratorsAreEqual(iter1: IterableIterator<any>, iter2: IterableIterator<any>): boolean {
  const array1 = Array.from(iter1).sort();
  const array2 = Array.from(iter2).sort();

  // Check if the sorted arrays are equal
  return JSON.stringify(array1) === JSON.stringify(array2);
}


export function isIsomorphic(s: string, t: string): boolean {
  const sSet = new Set(s);
  const tSet = new Set(t);
  if (sSet.size != tSet.size) {
      return false;
  }

  // We build the map to index ocurrences for each 
  const sMap = new Map<string, number[]>();
  const tMap = new Map<string, number[]>();

  s.split("").forEach((char, index) => {
    const occurrences = sMap.get(char);
    if (!occurrences) {
      sMap.set(char, [index])
    }
    else {
      const modifiedOccurrences = [...occurrences, index];
      sMap.set(char, modifiedOccurrences);
    }
  });


  t.split("").forEach((char, index) => {
    const occurrences = tMap.get(char);
    if (!occurrences) {
      tMap.set(char, [index])
    }
    else {
      const modifiedOccurrences = [...occurrences, index];
      tMap.set(char, modifiedOccurrences);
    }
  });

  const sValues = sMap.values();
  const tValues = tMap.values();
  const areIsomorphic = iteratorsAreEqual(sValues, tValues);

  return areIsomorphic;
};