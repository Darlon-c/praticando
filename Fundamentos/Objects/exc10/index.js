// Sistema de Vendas
// REQUISITOS:
// 1) Calcular o total vendido
// 2) Encontrar a venda de maior valor
// 3) Calcular a média das vendas
// 4) Criar um array apenas com vendas acima da média

const sales = [
  { client: "Carlos", value: 500 },
  { client: "Ana", value: 1200 },
  { client: "Pedro", value: 300 },
  { client: "Marina", value: 900 },
];

let totalSales = 0;
let biggestSale = sales[0];

for (let i = 0; i < sales.length; i++) {
  totalSales += sales[i].value;

  if (sales[i].value > biggestSale.value) {
    biggestSale = sales[i];
  }
}

let mediaSales = totalSales / sales.length;
let averageSales = [];

for (let i = 0; i < sales.length; i++) {
  if (sales[i].value > mediaSales) {
    averageSales.push(sales[i].client);
  }
}
console.log("Total vendido: R$", totalSales.toFixed(2));
console.log("A maior venda: ", biggestSale);
console.log(`A média de vendas é: ${mediaSales.toFixed(2)}`);
console.log("Vendas acima da média:", averageSales);
