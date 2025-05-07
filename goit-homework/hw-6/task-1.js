import users from './users.js';

console.log('----- Task - 1 -----');

// Отримати масив імен всіх користувачів (поле name).

const getUserNames = users => users.map(user => user.name);

console.log('All usernames:');
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
