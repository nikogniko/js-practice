// Напиши функцію findBestEmployee(employees),
// яка приймає об'єкт співробітників
// і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться
// як властивості об'єкта в форматі "ім'я":"кількість задач".

console.log('----- Task - 3 -----');

const findBestEmployee = function (employees) {
  const allEmployees = Object.entries(employees);
  let bestEmployee = {
    name: '',
    tasksNumber: 0,
  };

  for (const [name, tasksNumber] of allEmployees) {
    if (bestEmployee.tasksNumber < tasksNumber) {
      bestEmployee.name = name;
      bestEmployee.tasksNumber = tasksNumber;
    }
  }

  return `The best employee is ${bestEmployee.name} with number of tasks: ${bestEmployee.tasksNumber}`;
};

// перевірка працездатності реалізації.

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
