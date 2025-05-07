import users from './users.js';

console.log('----- Task - 7 -----');

//Отримати загальну суму балансу (поле balance) всіх користувачів.

// const calculateTotalBalance = users =>
//     users.reduce((total, user) => total + user.balance, 0);

const calculateTotalBalance = users =>
  users.reduce((total, user) => {
    console.log(`total: ${total}, userBalance: ${user.balance}`);
    return total + user.balance;
  }, 0);

console.log('Total: ', calculateTotalBalance(users)); // 20916
