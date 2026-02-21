// Considera apenas produtos em stock e retorna o nome do mais caro

const products = [
  { name: "TV", price: 2000, inStock: true },
  { name: "Notebook", price: 3500, inStock: false },
  { name: "Celular", price: 1500, inStock: true },
  { name: "Monitor", price: 1200, inStock: true },
];

const expensiveProduct = products
  .filter((product) => product.inStock)
  .reduce((acc, product) => acc.price > product.price ? acc : product);

console.log(expensiveProduct.name);
