// Task - 5
let deliveryCost = 0;
let message;

let country = prompt('До якої країни оформити доставку товару?');
country = country[0].toUpperCase() + country.slice(1).toLowerCase();

switch (country) {
  case 'Китай':
    deliveryCost = 100;
    break;
  case 'Чилі':
    deliveryCost = 250;
    break;
  case 'Австралія':
    deliveryCost = 170;
    break;
  case 'Індія':
    deliveryCost = 80;
    break;
  case 'Ямайка':
    deliveryCost = 120;
    break;
}

if (deliveryCost === 0) {
  message = 'У вашій країні доставка недоступна';
} else {
  message = `Доставка в ${country} буде коштувати ${deliveryCost} кредитів`;
}

alert(message);
