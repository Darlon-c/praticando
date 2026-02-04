// O Desafio da Escada (Nested Loops)
// Este é o clássico para entender loops aninhados (um for dentro de outro). Você deve imprimir uma escada de cerquilhas (#) no console.


const steps = 50 

for(let i = 0; i <= steps; i++) {
    let line = ''

    for(let j = 1; j <= i; j++) {
        line += "#"
    }

    console.log(line)
}






