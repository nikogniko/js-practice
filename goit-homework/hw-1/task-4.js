// Task - 4
console.log('----- Task 4 -----');
const pricePerDroid = 3000;
let credits = 23580;
let totalPrice = 0;
let message;

let quantity = prompt('Яку кількість дроїдів бажаєте придбати?');

if (quantity == null) {
  message = 'Скасовано користувачем!';
} else {
  quantity = Number.parseInt(quantity);

  if (isNaN(quantity)) {
    message = 'Невірний ввід';
  } else {
    totalPrice = quantity * pricePerDroid;

    if (totalPrice > credits) {
      message = 'Недостатньо коштів на рахунку!';
    } else {
      credits -= totalPrice;
      message = `Ви купили ${quantity} дроїдів, на рахунку залишилося ${credits} кредитів.`;
    }
  }
}

console.log(message);
