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
let greaterQuantity = inventory[0]
let lowestQuantity = inventory[0]
let newInventory = []
let highestStockValueProduct = inventory[0];


for (let i = 0; i < inventory.length; i++) {
    // valor total
    inventoryValue += inventory[i].price * inventory[i].quantity
   // maior quantidade
    if(inventory[i].quantity > greaterQuantity.quantity) {
      greaterQuantity = inventory[i]
    }
    // menor quantidade
     if(inventory[i].quantity < lowestQuantity.quantity) {
      lowestQuantity = inventory[i]
    }
    
    if(inventory[i].quantity < 10) {
      newInventory.push(inventory[i].name)
    }

    if(inventory[i].price * inventory[i].quantity > highestStockValueProduct.price * highestStockValueProduct.quantity) {
        highestStockValueProduct = inventory[i]
    }
}

let mediaValue = inventoryValue / inventory.length

console.log(`Valor total do estoque: R$${inventoryValue.toFixed(2)}`);
console.log(`Produto com maior quantidade: ${greaterQuantity.name} - ${greaterQuantity.quantity}und`)
console.log(`Produto com menor quantidade: ${lowestQuantity.name} - ${lowestQuantity.quantity}und`)
console.log("Produtos com estoque menor do que 10 und:",newInventory)
console.log(`A média de valores é: R$${mediaValue.toFixed(2)}`)
console.log("Produto que mais gera valor: ",highestStockValueProduct)

