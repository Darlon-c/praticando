// Criar objeto a partir de variáveis

const nameProduct = "Notebook";
const priceProduct = 3500;

const product = {
  name: nameProduct,
  price:  priceProduct
}

console.log(`O produto é um ${product.name} e custa R$${product.price.toFixed(2)}`)