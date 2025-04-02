//  Напиши функцію calculateTotalPrice(allProducts, productName),
//  яка отримує масив об'єктів та ім'я продукту (значення властивості name).
//  Повертає загальну вартість продукту (ціна * кількість).

console.log('----- Task - 6 -----');

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  let total = 0;

  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      total = price * quantity;
      break;
    }
  }

  return `Загальна вартість товару '${productName}': ${total}`;
};

// перевірка працездатності реалізації.

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
