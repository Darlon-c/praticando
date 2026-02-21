// Remover valores negativos

const values = [10, -5, 8, -2, 0, 7, 20, -80, 52, -1, -62, 31];

let positiveNumber = [];

for (let i = 0; i < values.length; i++) {
  if (values[i] >= 0) {
    positiveNumber.push(values[i]);
  }
}

console.log(positiveNumber);
