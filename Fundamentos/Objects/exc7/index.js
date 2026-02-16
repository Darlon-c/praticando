const products = [
  { name: "Mouse", price: 80 },
  { name: "Monitor", price: 900 },
  { name: "Teclado", price: 120 },
];

let lowestPrice = products[0];
let sum = 0;

for (let i = 0; i < products.length; i++) {
  sum += products[i].price;

  if (products[i].price < lowestPrice.price) {
    lowestPrice = products[i];
  }
}

let media = sum / products.length;

console.log(
  `Mais barato: ${lowestPrice.name} - R$${lowestPrice.price.toFixed(2)}`,
);
console.log(`Média: ${media.toFixed(2)}`);
