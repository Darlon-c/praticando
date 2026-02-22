// Some apenas os números que:
// São múltiplos de 5 e maiores que 20

const numbers = [10, 15, 20, 25, 30, 35];

const result = numbers
  .filter((number) => number % 5 === 0 && number > 20)
  .reduce((acc, number) => acc + number, 0);

console.log(result);
