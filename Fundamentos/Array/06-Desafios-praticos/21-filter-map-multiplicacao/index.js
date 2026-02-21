// Pega apenas números maiores que 10, Multiplica por 3 e retorna o novo array

const numbers = [3, 8, 15, 22, 7, 14, 21, 2, 32, 9, 5, 4, 12];

const multi = numbers
  .filter((num) => num > 10).map(num => num * 3)
 

console.log(multi);
