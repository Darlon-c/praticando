const products = [
  { name: "Mouse", price: 80 },
  { name: "Monitor", price: 900 },
  { name: "Teclado", price: 120 },
];

let allNames = []
let acima = []
let maxValue = products[0]

for (let i = 0; i < products.length; i++) {
  allNames.push(products[i].name)
  
  if(products[i].price > 100) {
    acima.push(products[i].name)
  }

  if(products[i].price > maxValue.price) {
      maxValue = products[i]
  }

}


console.log(`Acima de R$100: ${acima}`)
console.log(`Todos os nomes: ${allNames}`)
console.log(`Mais caro: ${maxValue.name} - R$${maxValue.price.toFixed(2)}`)