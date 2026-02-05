// Encontre e exiba todos os números primos entre 2 e 100
// Um número primo só é divisível por 1 e por ele mesmo
// Dica: use um loop dentro de outro e uma variável booleana
// Exemplo: 2, 3, 5, 7, 11, 13...



let num = 100
let numPrimo = 0

for(let i = 2; i <= num; i++) {
    let primo = true
    
   for(let j = 2; j < i; j++) {
    if(i % j === 0) {
        primo = false
    }
   }
  
   if(primo) {
    console.log(i)
    numPrimo++
   }

}



