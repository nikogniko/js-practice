import users from './users.js';

console.log('----- Task - 5 -----');

//Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(
  'User with email shereeanthony@kog.com',
  getUserWithEmail(users, 'shereeanthony@kog.com'),
);
// {об'єкт користувача Sheree Anthony}

console.log(
  'User with email elmahead@omatom.com',
  getUserWithEmail(users, 'elmahead@omatom.com'),
);
// {об'єкт користувача Elma Head}
