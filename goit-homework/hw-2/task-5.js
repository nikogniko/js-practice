// Напиши функцію checkForSpam(message), приймаючу 1 параметр message
// - рядок. Функція перевіряє її на вміст слів spam і sale.
// Якщо знайшли заборонене слово, то функція повертає true,
// якщо заборонених слів немає функція повертає false.
// Слова в рядку можуть бути в довільному регістрі.

console.log('----- Task - 5 -----');

const checkForSpam = function (message) {
  const normalizedString = message.toLocaleLowerCase();
  return normalizedString.includes('spam') || normalizedString.includes('sale');
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
