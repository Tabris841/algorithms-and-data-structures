function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (const char of first) {
    lookup[char] = (lookup[char] ?? 0) + 1;
  }

  for (const char of second) {
    if (!lookup[char]) {
      return false;
    }

    lookup[char] -= 1;
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
