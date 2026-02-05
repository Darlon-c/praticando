// SISTEMA DE CAIXA REGISTRADORA 

const cart = [
    { nome: "Camiseta", preco: 49.90, quantidade: 2 },
    { nome: "Calça", preco: 129.90, quantidade: 1 },
    { nome: "Tênis", preco: 199.90, quantidade: 1 },
    { nome: "Meia", preco: 9.90, quantidade: 3 },
    { nome: "Meia Premium", preco: 18.90, quantidade: 3 }
]

let subtotal = 0
let discount = 0

console.log("======== RECIBO DA COMPRA ========")
for(let i = 0; i < cart.length; i++) {
    const subtotalItem =  cart[i].quantidade * cart[i].preco 
    console.log(`${cart[i].quantidade}x ${cart[i].nome.padEnd(20, " ")}R$ ${subtotalItem.toFixed(2)} `)
   
    subtotal += subtotalItem
    
}

console.log("-----------------------------------")
console.log(`Subtotal: R$ ${subtotal.toFixed(2).padStart(17, ' ')}`)

if(subtotal >= 500) {
        let discount = subtotal * 0.10
        totalWithDiscount = subtotal - discount
        console.log(`Desconto (10%):${discount.toFixed(2).padStart(12, ' ')}`)
        console.log('===================================')
        console.log(`TOTAL: ${totalWithDiscount.toFixed(2).padStart(23, ' ')}`)
    } else if(subtotal >= 300) {
        let discount = subtotal * 0.05
        totalWithDiscount = subtotal - discount
        console.log(`Desconto (5%):${discount.toFixed(2).padStart(12, ' ')}`)
        console.log('===================================')
        console.log(`TOTAL: ${totalWithDiscount.toFixed(2).padStart(23, ' ')}`)
    } else {
        console.log('===================================')
        console.log(`TOTAL: ${subtotal.toFixed(2).padStart(23, ' ')}`)
    }






