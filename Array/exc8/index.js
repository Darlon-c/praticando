//  Separar pares e ímpares

const numbers = [1, 2, 3, 4, 5, 6, 7, 10, 61, 32, 18, 87, 95, 103];

let pair = []
let odd = []

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0 ) {
        pair.push(numbers[i])
    } else {
        odd.push(numbers[i])
    }
}

console.log(pair)
console.log(odd)