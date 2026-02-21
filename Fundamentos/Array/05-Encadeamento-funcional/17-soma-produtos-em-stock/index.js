// Pega apenas produtos em stock
// Pega apenas os preços
// Soma o valor total

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 50, inStock: true },
  { name: "Keyboard", price: 150, inStock: false },
  { name: "Monitor", price: 700, inStock: true },
];

const productInStock = products
  .filter((product) => product.inStock)
  .map((product) => product.price)
  .reduce((acc, price) => acc + price, 0);

console.log(productInStock);
