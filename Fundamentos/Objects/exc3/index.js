// Mostre apenas os pets com idade maior que 4.

const pets = [
  { name: "Rex", age: 5 },
  { name: "Mia", age: 2 },
  { name: "Thor", age: 7 },
];

for (let i = 0; i < pets.length; i++) {
  if (pets[i].age > 4) {
    console.log(pets[i].name);
  }
}
