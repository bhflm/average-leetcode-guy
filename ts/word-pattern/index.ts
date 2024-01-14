// Check if the string  "s" folllows the pattern
// "abba" => "cat dog dog cat" -> true 
// "aaaa" => "cat dog dog cat" -> false

export function wordPattern(pattern: string, s: string): boolean {
  let isPattern = true;
  const patternMatch = new Map<string, string>()
  const splitPattern = pattern.split('')
  const splitWord = s.split(' ')
  const alreadyStored = new Set()

  if (splitPattern.length != splitWord.length) {
    isPattern = false;
    return isPattern;
  }

  splitPattern.forEach((char, index) => {
    // means that it doesnt have the char yet
    if (!patternMatch.has(char) && !alreadyStored.has(splitWord[index])){
      // store a -> cat
      patternMatch.set(char, splitWord[index])
      alreadyStored.add(splitWord[index])
    }

    // we get "cat"
    const pattern = patternMatch.get(char);
    if (pattern != splitWord[index]) {
      isPattern = false;
    }
  })

  return isPattern;
};