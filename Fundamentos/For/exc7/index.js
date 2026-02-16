// Para números de 1 a 100:
// - Se múltiplo de 3 → "Fizz"
// - Se múltiplo de 5 → "Buzz"
// - Se múltiplo de 3 E 5 → "FizzBuzz"
// - Se múltiplo de 7 → "Bazz"
// - Se múltiplo de 3 E 7 → "FizzBazz"
// - Se múltiplo de 5 E 7 → "BuzzBazz"
// - Se múltiplo de 3, 5 E 7 → "FizzBuzzBazz"
// - Caso contrário → imprime o número



for(let i = 0; i < 100; i++) {
     if(i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        console.log(`${i} é FizzBuzzBazz`)
    } else if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} é FizzBuzz`)
    } else if(i % 3 === 0 && i % 7 === 0) {
        console.log(`${i} é FizzBazz`)
    } else if(i % 5 === 0 && i % 7 === 0) {
        console.log(`${i} é BuzzBazz`)
    } else if(i % 3 === 0) {
        console.log(`${i} é Fizz`)
    } else if(i % 5 === 0) {
        console.log(`${i} é Buzz`)
    } else if(i % 7 === 0) {
        console.log(`${i} é Bazz`)
    } else {
    console.log(i)  
    }
  
}




