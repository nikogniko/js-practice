// Напиши функцію findLongestWord(string),
// яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини)
// і повертає найдовше слово в цьому рядку.

console.log('----- Task - 3 -----');

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) longestWord = word;
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
