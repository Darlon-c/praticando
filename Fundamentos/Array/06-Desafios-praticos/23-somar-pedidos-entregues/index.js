// Soma apenas os pedidos entregues

const orders = [
  { id: 1, total: 200, delivered: true },
  { id: 2, total: 150, delivered: false },
  { id: 3, total: 300, delivered: true },
  { id: 4, total: 100, delivered: false },
];

const received = orders
  .filter((order) => order.delivered)
  .reduce((acc, num) => acc + num.total, 0);

console.log(received);
