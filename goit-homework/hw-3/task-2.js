// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
// Функція повертає число - кількість властивостей.

console.log('----- Task - 2 -----');

const countProps = function (obj) {
  const keys = Object.keys(obj);

  return keys.length;
};

// перевірка працездатності реалізації.

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
