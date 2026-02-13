const products = [
  { name: "Mouse", price: 80 },
  { name: "Monitor", price: 900 },
  { name: "Teclado", price: 120 },
  { name: "Cadeira", price: 450 },
];

let maisCaro = null;
let myValue = 0;
let sum = 0;

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 100) {
    sum += products[i].price;
    myValue++;

    if (maisCaro === null || products[i].price > maisCaro.price) {
      maisCaro = products[i];
    }
  }

}
console.log(`Total acima de 100: R$${sum}`);
console.log(`Mais caro acima de 100: ${maisCaro.name} - ${maisCaro.price}`);
console.log(`Quantidade acima de 100: ${myValue}`);
console.log(`Média acima de 100: R$${sum/myValue}`)

