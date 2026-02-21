// Apenas números maiores que 10
// Multiplicados por 2 e depois o maior valor final


const numbers = [5, 12, 8, 130, 44];

const greaterThan = numbers
  .filter((number) => number > 10)
  .map((num) => num * 2)
  .reduce((acc, valueFinal) => {
    return acc > valueFinal ? acc : valueFinal
  },0);

console.log(greaterThan);
