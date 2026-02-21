// Calcula a média das idades usando reduce

const users = [
  { name: "Ana", age: 20 },
  { name: "Carlos", age: 25 },
  { name: "Maria", age: 30 },
];

const mediaAge = users.reduce((acc, user) => acc + user.age, 0) / users.length

console.log(mediaAge);
