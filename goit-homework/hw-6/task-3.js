import users from './users.js';

console.log('----- Task - 3 -----');

//Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.log('Names of all male users:');
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
