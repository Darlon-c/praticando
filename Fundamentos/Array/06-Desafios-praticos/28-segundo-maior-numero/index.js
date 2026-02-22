const numbers = [10, 5, 8, 20, 15, 30];

const result = numbers.reduce((acc, num) => {
  acc = acc > num ? acc : num;
  return acc;
}, 0);

const maior = numbers
  .filter((num) => num !== result)
  .reduce((acc, num) => {
    acc = acc > num ? acc : num;
    return acc;
  });

console.log(maior);
