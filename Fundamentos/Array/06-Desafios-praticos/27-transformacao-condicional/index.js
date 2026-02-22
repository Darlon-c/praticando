// Se for par → multiplica por 10
// Se for ímpar → multiplica por 5

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.map((num) => {
  if (num % 2 === 0) {
    return num * 10;
  } else {
    return num * 5;
  }
});

console.log(result);
