// Filtro de "Preços Caros" (Prática com Arrays)
// Imagine que você tem um array de preços: 
// const precos = [15, 80, 45, 100, 250, 30]. Use um for para percorrer esse array e imprimir no console apenas os preços que são maiores que 50.


const precos = [15, 80, 45, 100, 250, 30, 50, 500, 20, 321, 153, 1000]

for(let i = 0; i <= precos.length; i++) {
    
    let priceAtt = precos[i]

    if(priceAtt > 50) {
        console.log(priceAtt)
    }
}


