// Task - 6
let input = 0;
let total = 0;

while (input !== null) {
  input = prompt('Введіть число, яке додасться до суми:');

  if (input === null) continue;

  input = Number(input);

  if (!isNaN(input)) {
    total += input;
  }
}

//-- Інший спосіб

// do {
//   input = Number(input);

//   if (!isNaN(input)) {
//     total += input;
//   }

//   input = prompt('Введіть число, яке додасться до суми:');
// } while (input !== null);

alert('Загальна сума чисел дорівнює ' + total);
