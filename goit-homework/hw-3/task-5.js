// Напиши функцію getAllPropValues(arr, prop),
// яка отримує масив об'єктів і ім'я властивості.
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

console.log('----- Task - 5 -----');

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const entries = [...arr];
  const allPropValues = [];

  for (const entry of entries) {
    const value = entry[prop];
    if (value !== undefined) allPropValues.push(value);
  }

  return allPropValues;
};

// перевірка працездатності реалізації.

console.table(products);

console.log('names:', getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log('quantity:', getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log('categories:', getAllPropValues(products, 'category')); // []
