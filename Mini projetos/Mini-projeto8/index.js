const products = [
  { id: 1, name: "Mouse", price: 80, stock: 10 },
  { id: 2, name: "Monitor", price: 900, stock: 5 },
  { id: 3, name: "Teclado", price: 120, stock: 15 },
  { id: 4, name: "Cadeira", price: 450, stock: 8 },
];

let totalStockValue = 0;
let mostExpensiveProduct = products[0];
let lowestStockProduct = products[0];
let productsWithCriticalStockLevels = [];
let cart = [];

for (let i = 0; i < products.length; i++) {
  totalStockValue += products[i].price * products[i].stock;

  if (products[i].price > mostExpensiveProduct.price) {
    mostExpensiveProduct = products[i];
  }

  if (products[i].stock < lowestStockProduct.stock) {
    lowestStockProduct = products[i];
  }

  if (products[i].stock <= 5) {
    productsWithCriticalStockLevels.push(products[i]);
  }

  // adicionar produtos no carrinho
  // Monitor
  if (products[i].id === 2) {
    if (products[i].stock > 0) {
      cart.push({
        id: products[i].id,
        name: products[i].name,
        price: products[i].price,
        quantity: 1,
      });
      // Diminui o estoque
      products[i].stock--;
    }
  }

  // Mouse
  if (products[i].id === 1) {
    if (products[i].stock > 0) {
      cart.push({
        id: products[i].id,
        name: products[i].name,
        price: products[i].price,
        quantity: 2,
      });
      // Diminui o estoque
      products[i].stock -= 2;
    }
  }
}

console.log(`Valor total do estoque: R$ ${totalStockValue.toFixed(2)}`);
console.log(`Produto mais caro: ${mostExpensiveProduct.name}`);
console.log(`Menor estoque: ${lowestStockProduct.name}`);
console.log(
  "Estoque crítico:",
  productsWithCriticalStockLevels.map((p) => p.name),
);
console.log("Compras:", cart);
console.log("Estoque atualizado:", products);

let totalValueCart = 0;
let totalWithDiscount = 0;
let discount = 0;

for (let j = 0; j < cart.length; j++) {
  totalValueCart += cart[j].price * cart[j].quantity;
}

if (totalValueCart > 1000) {
  discount = totalValueCart * 0.1;
  totalWithDiscount = totalValueCart - discount;
} else {
  totalWithDiscount = totalValueCart;
}

console.log("Valor total do carrinho: R$", totalValueCart);
console.log("Valor do desconto: ", discount);
console.log(
  "O valor total da compra com desconto de 10%: R$",
  totalWithDiscount,
);
