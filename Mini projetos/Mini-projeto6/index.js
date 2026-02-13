// Sistema de Funcionários
// ===============================
// REQUISITOS DA APLICAÇÃO
// ===============================
//
// 1) Calcular o total da folha salarial
// 2) Encontrar o funcionário com maior salário
// 3) Encontrar o funcionário com menor salário
// 4) Calcular a média salarial geral
// 5) Contar quantos funcionários existem em cada departamento
// 6) Criar um array com funcionários que ganham acima da média
//
// ===============================

const employees = [
  { name: "Carlos", salary: 3000, department: "TI" },
  { name: "Ana", salary: 4500, department: "RH" },
  { name: "Marcos", salary: 2000, department: "TI" },
  { name: "Fernanda", salary: 5000, department: "Financeiro" },
  { name: "Juliana", salary: 3500, department: "RH" },
];

let totalSalary = 0;
let highestSalary = employees[0];
let lowestSalary = employees[0];

for (let i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary;

  if (employees[i].salary > highestSalary.salary) {
    highestSalary = employees[i];
  }

  if (employees[i].salary < lowestSalary.salary) {
    lowestSalary = employees[i];
  }
}

let mediaSalary = totalSalary / employees.length;

console.log(`Total da folha salarial: R$${totalSalary.toFixed(2)}`);
console.log(`O colaborador com maior salário é: ${highestSalary.name} `);
console.log(`O colaborador com menor salário é: ${lowestSalary.name} `);
console.log(`A média salarial geral é: R$${mediaSalary.toFixed(2)}`);

let departmentCount = {};
let aboveAverageEmployees = []

for (let i = 0; i < employees.length; i++) {
  let departmentName = employees[i].department;

  if (departmentCount[departmentName]) {
    departmentCount[departmentName]++;
  } else {
    departmentCount[departmentName] = 1;
  }


  if(employees[i].salary > mediaSalary) {
    aboveAverageEmployees.push(employees[i].name)
  }
}

console.log("Quantos colaboradores por departamento", departmentCount);
console.log(`Colaboradores que recebem mais que a média: ${aboveAverageEmployees}`)














