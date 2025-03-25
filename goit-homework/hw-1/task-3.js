// Task - 3
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const input = prompt('Введіть пароль');

if (input === null) {
  message = 'Скасовано користувачем!';
} else if (input === ADMIN_PASSWORD) {
  message = 'Ласкаво просимо!';
} else {
  message = 'Доступ заборонений, невірний пароль!';
}

alert(message);
