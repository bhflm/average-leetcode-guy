function buildAnagramMap(s: string): Map<string, number> {
  const map = new Map<string, number>();
  s.split('').forEach(char => {
    if (map.has(char)) {
      const currentCount = map.get(char);
      if (currentCount) {
        map.set(char, currentCount + 1);
      }
    } else {
      map.set(char, 1);
    }
  })
  return map;
};

export function isAnagram(s: string, t: string): boolean {
  let isAnagram = true;
  // two strings, "anagram", "nagaramaaa"
  const mapS = buildAnagramMap(s);
  const mapT = buildAnagramMap(t);
  
  Array.from(mapS.keys()).forEach(key => {
    const sValue = mapS.get(key);
    const tValue = mapT.get(key);
    if (mapS.get(key) != mapT.get(key)) {
      isAnagram = false;
    }
  })

  Array.from(mapT.keys()).forEach(key => {
    const sValue = mapS.get(key);
    const tValue = mapT.get(key);
    if (mapS.get(key) != mapT.get(key)) {
      isAnagram = false;
    }
  })

  return isAnagram;
}


// Without an arra

function isAnagramAlternativeVersion(s: string, t: string): boolean {
  let isAnagram = true;
  let sArr = s.split('').sort();
  let tArr = t.split('').sort();

  if (sArr.length != tArr.length) return false;

  for(let i = 0; i < sArr.length; i ++){
      if (sArr[i] != tArr[i]) {
          isAnagram = false;
          return isAnagram;
      }
  }

  return isAnagram;
};