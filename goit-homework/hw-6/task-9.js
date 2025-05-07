import users from './users.js';

console.log('----- Task - 9 -----');

//Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

// const getNamesSortedByFriendsCount = users =>
//   [...users]
//     .sort((curUser, nextUser) => {
//       const result = curUser.friends.length - nextUser.friends.length;
//       console.log(
//         `${curUser.name}: ${curUser.friends.length}, ${nextUser.name}: ${nextUser.friends.length}, result: ${result}`,
//       );
//       return result;
//     })
//     .map(user => user.name);

const getNamesSortedByFriendsCount = users =>
  [...users]
    .sort(
      (curUser, nextUser) => curUser.friends.length - nextUser.friends.length,
    )
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
