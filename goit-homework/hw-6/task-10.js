import users from './users.js';

console.log('----- Task - 10 -----');

// Отримати масив всіх умінь всіх користувачів (поле skills),
// при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

// const getSortedUniqueSkills = users =>
//   users
//     .flatMap(user => user.skills)
//     .reduce(
//       (allSkills, skill) =>
//         !allSkills.find(s => s === skill)
//           ? [...allSkills, skill]
//           : [...allSkills],
//       [],
//     )
//     .sort();

const getSortedUniqueSkills = users =>
  [...new Set(users.flatMap(user => user.skills))].sort();

console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
