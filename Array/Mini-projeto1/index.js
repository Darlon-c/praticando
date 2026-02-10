// Mini-Projeto: Controle de Despesas Pessoais

const expenses = [35, 120, 55, 20, 300, 18, 75, 200];

let totalExpenses = 0;
let highValues = [];

for (let i = 0; i < expenses.length; i++) {
  totalExpenses += expenses[i];

  if (expenses[i] > 100) {
    highValues.push(expenses[i]);
  }
}

let highestValue = expenses[0];
let lowestValue = expenses[0];

for (let j = 0; j < expenses.length; j++) {
  if (expenses[j] > highestValue) {
    highestValue = expenses[j];
  }

  if (expenses[j] < lowestValue) {
    lowestValue = expenses[j];
  }
}

let mediaExpenses = totalExpenses / expenses.length;

console.log(`Valor total: R$ ${totalExpenses.toFixed(2)}`);
console.log(`Média dos gastos: R$ ${mediaExpenses.toFixed(2)}`);
console.log(`Maiores gastos: ${highValues}`);
console.log(`Maior gasto: R$ ${highestValue}`);
console.log(`Menor gasto: R$ ${lowestValue}`);

if (totalExpenses > 500) {
  console.log("Atenção: gastos elevados!");
} else {
  console.log("Gastos sob controle");
}
