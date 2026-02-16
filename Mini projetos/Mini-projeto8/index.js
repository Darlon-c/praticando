const products = [
  { id: 1, name: "Mouse", price: 80, stock: 10 },
  { id: 2, name: "Monitor", price: 900, stock: 5 },
  { id: 3, name: "Teclado", price: 120, stock: 15 },
  { id: 4, name: "Cadeira", price: 450, stock: 8 },
];

let totalStockValue = 0;
let mostExpensiveProduct = products[0]
let lowestStockProduct = products[0]
let productsWithCriticalStockLevels = []

for (let i = 0; i < products.length; i++) {
  totalStockValue += products[i].price * products[i].stock

  if(products[i].price > mostExpensiveProduct.price) {
    mostExpensiveProduct = products[i]
  }

  if(products[i].stock < lowestStockProduct.stock){
    lowestStockProduct = products[i]
  }

  if(products[i].stock <= 5) {
    productsWithCriticalStockLevels.push(products[i])
  }

}

console.log(`Valor total do estoque: R$ ${totalStockValue.toFixed(2)}`);
console.log(`Produto mais caro: ${mostExpensiveProduct.name}`);
console.log(`Menor estoque: ${lowestStockProduct.name}`);
console.log("Estoque crítico:", productsWithCriticalStockLevels.map(p => p.name));

