// Usa reduce para somar

const numbersAtt = [10, 20, 30];

let sum = numbersAtt.reduce(function (acumulate, numAtt) {
  return acumulate + numAtt;
}, 0);

console.log(sum);
