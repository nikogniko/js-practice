// Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи
// з балансом та історією транзакцій.

console.log('----- Task - 7 -----');

// Типів транзацкій всього два.
// Можна покласти або зняти гроші з рахунку.

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

// Кожна транзакція - це об'єкт з властивостями: id, type і amount

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  isCorrectType(type) {
    return Object.values(Transaction).includes(type);
  },

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    return { amount, type, id: this.transactions.length + 1 };
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */

  deposit(amount) {
    if (amount <= 0) return 'Не коректна сума!';

    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

    this.transactions.push(transaction);
    this.balance += amount;
    return 'Рахунок поповнено на ' + amount;
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */

  withdraw(amount) {
    if (amount <= 0) return 'Не коректна сума!';
    if (amount > this.balance)
      return `Неможливо зняти ${amount}, недостатньо коштів`;

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

    this.transactions.push(transaction);
    this.balance -= amount;

    return 'Успішно знято з рахунку ' + amount;
  },

  // Метод повертає поточний баланс

  getBalance() {
    return 'Поточний баланс: ' + this.balance;
  },

  // Метод шукає і повертає об'єкт транзакції по id

  getTransactionDetails(id) {
    if (id > this.transactions.length || id < 0)
      return 'Транзакції з таким id не існує!';

    return this.transactions[id - 1];
  },

  // Метод повертає кількість коштів
  // певного типу транзакції з усієї історії транзакцій

  getTransactionTotal(type) {
    if (!this.isCorrectType(type))
      return `Транзакцій з типом '${type}' не існує`;

    let total = 0;

    for (const tran of this.transactions) {
      if (tran.type === type) total += tran.amount;
    }

    return `Загальна сума транзакцій типу ${type}: ` + total;
  },
};

// перевірка працездатності реалізації.

console.log(account.deposit(5000));
console.log(account.withdraw(1350));
console.log(account.withdraw(250));
console.log(account.deposit(111));

console.log(account.getBalance());

console.log(account.withdraw(4000));
console.log(account.getBalance());

console.table(account.transactions);

console.log('Транзакція з id 2: ', account.getTransactionDetails(2));
console.log('Транзакція з id 5: ', account.getTransactionDetails(5));
console.log('Транзакція з id -1: ', account.getTransactionDetails(-1));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionTotal('put'));
