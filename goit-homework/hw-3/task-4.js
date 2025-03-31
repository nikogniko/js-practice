// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
// Функція рахує загальну суму зарплати працівників і повертає її.
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

console.log('----- Task - 4 -----');

const countTotalSalary = function (employees) {
  const salaries = Object.values(employees);
  let total = 0;

  for (const salary of salaries) {
    total += salary;
  }

  return 'Total: ' + total;
};

// перевірка працездатності реалізації.

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
