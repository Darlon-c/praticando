const inputText = document.getElementById("inputText");
const btnAdd = document.getElementById("btnAdd");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const result = document.getElementById("result");
const totalPrice = document.getElementById("totalPrice");

let products = [];
let idCount = 1;

function addProduct() {
  if (inputText.value === "") {
    alert("Informe o nome do produto");
    return;
  } else if (price.value === "" || price.value <= 0) {
    alert("Informe o valor do produto");
    return;
  } else if (quantity.value === "" || quantity.value <= 0) {
    alert("Informe a quantidade do produto");
    return;
  }

  const product = {
    id: idCount,
    nome: inputText.value.trim(),
    price: Number(price.value),
    quantity: Number(quantity.value),
  };

  products.push(product);
  idCount++;
  inputText.value = "";
  price.value = "";
  quantity.value = "";
  renderProducts();
  calculateTotal();
  console.log(products);
}

function renderProducts() {
  const listProducts = products.map((product) => {
    return `<div>${product.id} | ${product.nome} | R$${product.price.toFixed(2)} | ${product.quantity}<button onclick="removeProduct(${product.id})">Remover</button></div>`;
  });

  result.innerHTML = listProducts.join("");
}

function calculateTotal() {
  const finalValue = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  totalPrice.innerHTML = finalValue.toFixed(2);
}

function removeProduct(id) {
  products = products.filter((product) => {
    return product.id !== id;
  });

  renderProducts()
  calculateTotal()
}

btnAdd.addEventListener("click", addProduct);
