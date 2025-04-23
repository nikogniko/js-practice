// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

// Додай методи класу:
// getItems() - повертає масив поточних товарів
// addItem(item) - отримує новий товар і додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

console.log('----- Task - 3 -----');

class Storage {
  #items = [];

  constructor(items = []) {
    this.#items = items;
  }

  get items() {
    return this.#items;
  }

  addItem(item) {
    this.#items.push(item);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
