const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const registerProduct = document.getElementById("registerProduct");
const productQuantity = document.getElementById("productQuantity");
const result = document.getElementById("result");
const totalPriceProducts = document.getElementById("totalPriceProducts");

let listProducts = []
let idCount = 1

function createProduct() {
    if(productName.value === '') {
        alert('Informe o nome do produto!')
        return
    } else if(productPrice.value === '')  {
        alert('Informe o valor do produto!')
        return
    } else if(productQuantity.value === '') {
        alert('Informe a quantidade do produto!')
        return
    }

    const product = {
        id: idCount,
        name: productName.value,
        price: productPrice.value,
        quantity: productQuantity.value
    }

    listProducts.push(product)
    productName.value = ''
    productPrice.value = ''
    productQuantity.value = ''

}


registerProduct.addEventListener('click', createProduct)