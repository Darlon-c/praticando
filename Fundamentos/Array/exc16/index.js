// Filtra apenas maiores de idade (>=18)
// Pega só os nomes
// Transforma os nomes em maiúsculo

const users = [
  { name: "Joao", age: 18 },
  { name: "Maria", age: 25 },
  { name: "Carlos", age: 30 },
  { name: "Ana", age: 16 },
];

const older = users.filter((newAge) => {
  return newAge.age >= 18;
});

const newNames = older.reduce((accumulator, person) => {
  accumulator.push(person.name);
  return accumulator;
}, []);

const namesToUppercase = newNames.map((name) => {
  return name.toUpperCase();
});

console.log(namesToUppercase);
