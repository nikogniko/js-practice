// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число.
// Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пір,
// поки користувач не натисне Cancel в prompt.

// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній,
// необхідно порахувати суму всіх елементів масиву і записати її в змінну total.
// Використовуй цикл for або for...of.
// Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// Робити перевірку того, що користувач ввів саме число,
// а не довільний набір символів, не обов'язково.
// Якщо хочеш, в разі некоректного введення, показуй alert з текстом
// 'Було введено не число, попробуйте ще раз', при цьому результат prompt
// записувати в масив чисел не потрібно, після чого знову користувачеві
// пропонується ввести число в prompt.

console.log('----- Task - 6 -----');

function gatherNumbersFromPromt() {
  let input = '';
  let numbers = [];

  while (input !== null) {
    input = prompt('Введіть число:');

    if (input === null) continue;

    input = Number(input);

    !isNaN(input)
      ? numbers.push(input)
      : alert('Було введено не число, cпробуйте ще раз!');
  }

  return numbers;
}

function calculateNumbersFromPromt() {
  const numbers = gatherNumbersFromPromt();

  // Спосіб, якщо початковий масив не пустий:
  // сonst prevNumbers = [1, 2];

  // сonst numbers = prevNumbers.concat(gatherNumbersFromPromt());
  // або
  // сonst numbers = [...prevNumbers, ...gatherNumbersFromPromt()];

  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  console.log('Загальна сума чисел дорівнює ', total);
}

// Виклик функції
calculateNumbersFromPromt();
