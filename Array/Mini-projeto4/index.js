//Mini-desafio (muito importante)
//Cria um programa que:
// 1️⃣ Pergunta quantos números o utilizador quer digitar
// 2️⃣ Lê esses números
// 3️⃣ Guarda num array
// 4️⃣ Mostra: Soma, Média, Maior e Menor

const numbersInput = document.getElementById("numbers");
const submitBtn = document.getElementById("submitBtn");
const calculate = document.getElementById("calculate");

let numbersArray = [];

submitBtn.addEventListener("click", function () {
  const value = Number(numbersInput.value);

  if (!isNaN(value)) {
    numbersArray.push(value);
    console.log(numbersArray);
  }

  numbersInput.value = "";
});

let totalValue = 0;

calculate.addEventListener("click", function () {
  totalValue = 0;

  let lowestValue = numbersArray[0];
  let highestValue = numbersArray[0];

  for (let i = 0; i < numbersArray.length; i++) {
    totalValue += numbersArray[i];

    if (lowestValue > numbersArray[i]) {
      lowestValue = numbersArray[i];
    }

    if (highestValue < numbersArray[i]) {
      highestValue = numbersArray[i];
    }
  }

  let average = totalValue / numbersArray.length;

  console.log(`A soma dos valores é: ${totalValue}`);
  console.log(`A média dos valores é: ${average}`);
  console.log(`Menor número: ${lowestValue}`);
  console.log(`Maior número: ${highestValue} `);
});
