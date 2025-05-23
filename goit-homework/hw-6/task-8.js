import users from './users.js';

console.log('----- Task - 8 -----');

// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (users, friendName) =>
  users.reduce(
    (userNames, user) =>
      // user.friends.find(friend => friend === friendName)  // поверне сам об'єкт
      user.friends.some(friend => friend === friendName) //     поверне чи є принаймні один
        ? [...userNames, user.name]
        : [...userNames],
    [],
  );

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
