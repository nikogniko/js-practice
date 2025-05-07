import users from './users.js';

console.log('----- Task - 4 -----');

//Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log('All not active users:');
console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
