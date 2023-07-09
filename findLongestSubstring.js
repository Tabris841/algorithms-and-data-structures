function findLongestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  const charMap = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charMap[char] >= start) {
      start = charMap[char] + 1;
    }

    charMap[char] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));
