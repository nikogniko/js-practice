console.log('----- Isograms -----');

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram.
// Ignore letter case.

function isIsogram(str) {
  const normalisedStr = str.trim().toLowerCase();
  return normalisedStr.length === new Set(normalisedStr).size;
}

console.log('Dermatoglyphics -', isIsogram('Dermatoglyphics'));
console.log('aba -', isIsogram('aba'));
console.log('moOse -', isIsogram('moOse'));
console.log("'' -", isIsogram(''));

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
