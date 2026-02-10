// Sistema de Produtos e Descontos
//Criar um programa que analise produtos, aplique descontos e gere um relatório final.
//Este tipo de lógica é muito comum em e-commerce e sistemas reais.

const products = [
  { name: "Teclado", price: 120 },
  { name: "Mouse", price: 60 },
  { name: "Monitor", price: 900 },
  { name: "Cabo HDMI", price: 30 },
  { name: "Headset", price: 250 },
];

let valueTotal = 0;
let discountedProducts = [];

for (let i = 0; i < products.length; i++) {
  valueTotal += products[i].price;

  if (products[i].price > 100) {
    const discountedPrice = products[i].price * 0.9;
    
    discountedProducts.push({
      name: products[i].name,
      originalPrice: products[i].price,
      finalPrice: discountedPrice,
    });
  }
}

// Verifico e armazeno o maior e menor valor

let lessExpensive = products[0];
let moreExpensive = products[0];

for (let j = 0; j < products.length; j++) {
  if (products[j].price < lessExpensive.price) {
    lessExpensive = products[j];
  }

  if (products[j].price > moreExpensive.price) {
    moreExpensive = products[j];
  }
}

console.log(`O valor total é: R$${valueTotal.toFixed(2)}`);

console.log(
  `O produto mais barato é: ${lessExpensive.name} - ${lessExpensive.price.toFixed(2)}`,
);
console.log(
  `O produto mais caro é: ${moreExpensive.name} - ${moreExpensive.price.toFixed(2)}`,
);

console.log("Produtos com desconto:");
for (let i = 0; i < discountedProducts.length; i++) {
  console.log(
    `${discountedProducts[i].name} - de R$${discountedProducts[i].originalPrice} por R$${discountedProducts[i].finalPrice.toFixed(2)}`
  );
}

