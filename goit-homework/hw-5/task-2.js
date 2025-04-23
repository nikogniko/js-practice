// Напиши клас User для створення користувача з наступними властивостями:
// name - рядок
// age - число
// followers - число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

console.log('----- Task - 2 -----');

class User {
  constructor({ name, age, followers } = {}) {
    this._name = name;
    this._age = age;
    this._followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this._name} is ${this._age} years old and has ${this._followers} followers`,
    );
  }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
