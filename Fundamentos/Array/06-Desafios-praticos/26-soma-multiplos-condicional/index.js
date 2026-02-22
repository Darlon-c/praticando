// Some apenas os números que:
// São múltiplos de 5 e maiores que 20

const numbers = [10, 15, 20, 25, 30, 35];

const multi = numbers.filter((number) => number % 5 === 0 && number > 20);

console.log(multi);
