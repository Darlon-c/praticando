// Filtro de Números
// Objetivo: Inserir números
// Separar em: pares e ímpares
const numbers = document.getElementById("numbers");
const submitBtn = document.getElementById("submitBtn");
const separate = document.getElementById("separate");
const pairNumbers = document.getElementById("pairNumbers");
const oddNumbers = document.getElementById("oddNumbers");

let totalNumbers = [];

submitBtn.addEventListener("click", function () {
  const value = Number(numbers.value);
  totalNumbers.push(value);
  numbers.value = "";

  console.log(totalNumbers);
});

separate.addEventListener("click", function () {
  let pair = [];
  let odd = [];

  for (let i = 0; i < totalNumbers.length; i++) {
    if (totalNumbers[i] % 2 === 0) {
      pair.push(totalNumbers[i]);
    } else {
      odd.push(totalNumbers[i]);
    }
  }

  pairNumbers.innerHTML = `Números pares: ${pair}`;
  oddNumbers.innerHTML = `Números ímpares: ${odd}`;
});
