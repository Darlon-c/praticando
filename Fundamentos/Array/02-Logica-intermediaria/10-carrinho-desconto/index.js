// Simulação de carrinho de compras

const cart = [25, 50, 10, 40, 30, 80, 19.9, 9.9];

let totalValue = 0;

for (let i = 0; i < cart.length; i++) {
  totalValue += cart[i];
}

let finalValue = totalValue;

if (totalValue > 100) {
  finalValue = totalValue * 0.9;
}

console.log("Total:", totalValue);
console.log("Valor final:", finalValue.toFixed(2));
