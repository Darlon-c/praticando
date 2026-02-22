//Retorne o nome do produto mais vendido.

const products = [
  { name: "Notebook", sold: 10 },
  { name: "Mouse", sold: 50 },
  { name: "Teclado", sold: 30 },
];

const result = products.reduce((acc, product) => {
  return acc.sold > product.sold ? acc : product;
});

console.log(result.name)