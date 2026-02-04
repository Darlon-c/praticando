// O Inversor de Strings
// Crie um código que receba uma palavra (ex: "Tailwind") e use o for para imprimi-la ao contrário.


const css = 'Darlon'
let palavraInvertida = ''

for(let i = css.length - 1; i >= 0 ; i--) {
    const letraAtual = css[i]

    palavraInvertida += letraAtual
    
}

console.log(`A palavra ${css} invertida fica assim ${palavraInvertida}`)
