// Task - 2
//Перевір працездатність коду з різними значеннями змінної ordered, наприклад 20, 80 і 130.
console.log('----- Task 2 -----');

const total = 100; //кількість товарів на складі
const ordered = 50; //одиниць товару в замовленні
let message;

if (ordered > total) {
  message = 'На складі недостатньо товарів!';
} else {
  message = "Замовлення оформлено, з вами зв'яжеться менеджер";
}

console.log(message);
