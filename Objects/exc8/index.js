const products = [
  { name: "Mouse", price: 80 },
  { name: "Monitor", price: 900 },
  { name: "Teclado", price: 120 },
];

let above100 = 0;
let lessThan100 = 0;
let found = false;

const searchName = "Monitor";

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 100) {
    above100++;
  } else {
    lessThan100++;
  }

  if (products[i].price < 100) {
    products[i].price *= 1.1;
  }

  if (products[i].name === searchName) {
    console.log(
      `Produto encontrado: ${products[i].name} - R$${products[i].price}`,
    );
    found = true;
  }
}

if (!found) {
  console.log("Produto não encontrado");
}

console.log(`Acima de 100: ${above100}`);
console.log(`Até 100: ${lessThan100}`);

console.log("Produtos atualizados:");
console.log(products);
