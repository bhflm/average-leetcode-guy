const isVowel = (a: string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(a);
}

export function reverseVowels(s: string): string {
  // two pointer approach,
  let splitted = s.split('');

  let i = 0;
  let end = splitted.length - 1;

  while( i < end ){
      console.log('Going: ', splitted[i], splitted[end])

      // pointer to find first vowel; 
      if (!isVowel(splitted[i])) {
        i += 1;
      }

      if (!isVowel(splitted[end])) {
        end -= 1;
      };

      if (isVowel(splitted[i]) && isVowel(splitted[end])) {
          let temp = splitted[i];
          splitted[i] = splitted[end];
          splitted[end] = temp;
          i += 1;
          end -= 1;
      }
    }

  return splitted.join('');
};