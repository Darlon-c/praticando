// Filtra apenas maiores de idade (>=18)
// Pega só os nomes
// Transforma os nomes em maiúsculo

const users = [
  { name: "Joao", age: 18 },
  { name: "Maria", age: 25 },
  { name: "Carlos", age: 30 },
  { name: "Ana", age: 16 },
];

const result = users
  .filter((user) => user.age >= 18)
  .map((user) => user.name)
  .map((name) => name.toUpperCase());

console.log(result);


