import users from './users.js';

console.log('----- Task - 2 -----');

//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log('All users with blue eyes:');
console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
