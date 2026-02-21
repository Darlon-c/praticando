// Use map para transformar os nomes em: ["JOAO", "MARIA", "CARLOS"]

const names = ["joao", "maria", "carlos"];

const namesUppercase = names.map(function (name) {
  return name.toUpperCase();
});

console.log(namesUppercase);
