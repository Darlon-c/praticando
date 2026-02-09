// Contar Elementos do Array 
// Conta quantas vezes a letra "a" aparece no array.

const lyrics = ["a", "b", "c", "a", "d", "a"];

let caunt = 0

for(let i = 0; i < lyrics.length; i++) {
    if(lyrics[i] === 'a') {
        caunt++       
    }
}

console.log(caunt)
 



