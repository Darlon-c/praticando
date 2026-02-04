// Crie um programa que conte de 1 a 50 e:
// 1. Conte quantos números são pares
// 2. Conte quantos números são ímpares
// 3. Some todos os números pares
// 4. Some todos os números ímpares
// Ao final, exiba os 4 resultados


let cauntPair = 0
let cauntOdd = 0
let sumPair = 0
let sumOdd = 0

for(let i = 1; i <= 50; i++) {
    
    if(i % 2 === 0) {
       cauntPair++
       sumPair += i
    } else {
        cauntOdd++
        sumOdd += i
    }
}
console.log(`Quantidade de números pares: ${cauntPair}
            \nQuantidade de números ímpares: ${cauntOdd}
            \nA soma de todos os números pares: ${sumPair}
            \nA soma de todos os números ímpares: ${sumOdd}
`)