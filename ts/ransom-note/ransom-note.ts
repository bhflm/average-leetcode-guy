function canConstruct(ransomNote: string, magazine: string): boolean {
  let canConstruct = true;
  // build the hashMap
  const magazineMap = new Map<string, number>(); // { "a": "b" }
  magazine.split('').forEach(char => {
    // Check if letter exists, if exists add one to count
    if (magazineMap.has(char)) {
      const count = magazineMap.get(char);
      magazineMap.set(char, count + 1)
    } else {
    // If letter does not exist, create the new key and set count to 1
      magazineMap.set(char, 1)
    }
  })
  const splittedRansomNote = ransomNote.split('')
  // now check if ransomNote chars do exist over the map
  splittedRansomNote.forEach(char => {
    // if letter does not exist you can't construct so set canConstruct to false and return
    if (!magazineMap.has(char)) {
      canConstruct = false;
    } 
    
    // if letter exists on the map, rest count 
    if (magazineMap.has(char)) {
      const currentCount = magazineMap.get(char);
      // may be the case that currenctCount is 1, so if its 0 we delete the key
      if (currentCount == 1){
        magazineMap.delete(char)
      } else {
        magazineMap.set(char, currentCount - 1)
      }
    }
  })


  return canConstruct;
};