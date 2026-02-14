// REQUISITOS:
// 1) Calcular o valor total do estoque (price * quantity)
// 2) Encontrar o produto com maior quantidade
// 3) Encontrar o produto com menor quantidade
// 4) Criar um array com produtos com estoque abaixo de 10

const inventory = [
  { name: "Mouse", price: 80, quantity: 15 },
  { name: "Monitor", price: 900, quantity: 5 },
  { name: "Teclado", price: 120, quantity: 20 },
  { name: "Cadeira", price: 450, quantity: 8 },
];

let inventoryValue = 0;
let price = 0
let quantity = 0

for (let i = 0; i < inventory.length; i++) {
     price += inventory[i].price  
    quantity +=inventory[i].quantity

  
}
console.log(price * quantity)
console.log(inventoryValue);





