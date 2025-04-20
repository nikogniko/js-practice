//Розстав відсутні this в методах об'єкта account.

console.log('----- Task - 1 -----');

const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    this.discount = value;
  },
  showOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost;
    this.orders.push(order);
  },
};

account.changeDiscount(0.15);
console.log('account discount:', account.discount); // 0.15

console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log('account balance:', account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
