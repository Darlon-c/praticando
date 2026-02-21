// Calcular o total do carrinho
// Retornar apenas produtos que custam mais de 100
// Criar um novo array com este formato: Nome - valor

const cart = [
  { name: "Camisa", price: 50, quantity: 2 },
  { name: "Calça", price: 120, quantity: 1 },
  { name: "Tênis", price: 300, quantity: 1 },
  { name: "Meias", price: 20, quantity: 3 },
];

const totalValue = cart.reduce((acc, product) => {
  return acc + product.price * product.quantity;
}, 0);

const expensiveProduct = cart.filter((product) => product.price > 100);

const newArray = cart.map((product) => {
  return `${product.name} - ${product.price * product.quantity}`;
});

console.log(`Valor total do carrinho: R$${totalValue.toFixed(2)}`);
console.log(expensiveProduct);
console.log(newArray);
