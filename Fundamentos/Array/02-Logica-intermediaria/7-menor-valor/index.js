//  Encontrar o Menor Valor, encontre e imprima o menor número do array

const numbers = [9, 4, 15, 2, 20, 1.5, 1, 8, 100, 961];
let minor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < minor) {
    minor = numbers[i];
  }
}
console.log(minor);
