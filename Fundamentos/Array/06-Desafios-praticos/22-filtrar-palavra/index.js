// Pegue apenas palavras com mais de 5 letras e converta para MAIÚSCULO

const words = ["banana", "maçã", "abacaxi", "uva", "laranja"];

const fruits = words
  .filter((names) => names.length > 5)
  .map((fruit) => fruit.toUpperCase());

console.log(fruits);
