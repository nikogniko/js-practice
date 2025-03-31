//Напиши скрипт, який, для об'єкта user, послідовно:
//  додає поле mood зі значенням 'happy'
//  замінює значення hobby на 'skydiving'
//  замінює значення premium на false
//  виводить вміст об'єкта user в форматі
//  ключ:значення використовуючи Object.keys() і for...of

console.log('----- Task - 1 -----');

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

printUser(user);
console.log('-----');

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

printUser(user);

function printUser(user) {
  const keys = Object.keys(user);

  for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }

  // another way

  // const entries = Object.entries(user);

  // for (const [name, value] of entries) {
  //   console.log(`${name}: ${value}`);
  // }
}
