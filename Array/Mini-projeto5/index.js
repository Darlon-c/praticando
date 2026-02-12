// Sistema de Cadastro de Produtos
// Simula a base de um sistema de e-commerce / estoque.

const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const addProductBtn = document.getElementById("addProduct");
const showInfo = document.getElementById("showInfo");
const report = document.getElementById("report");
const removeProductNameInput = document.getElementById("removeProductName");
const removeProductBtn = document.getElementById("removeProductBtn");

let products = [];

addProductBtn.addEventListener("click", function () {
  const name = productNameInput.value;
  const price = Number(productPriceInput.value);

  if (name === "") {
    alert("Informe o nome do produto");
    return;
  }
  if (price <= 0) {
    alert("Informe o valor do produto");
    return;
  }

  const product = {
    name: name,
    price: price,
  };

  products.push(product);
  renderProducts()
  productNameInput.value = "";
  productPriceInput.value = "";
  console.log(products);
});

report.addEventListener("click", function () {
  if (products.length === 0) {
    alert("Nenhum produto cadastrado!");
    return;
  }

  let totalProducts = products.length;
  let totalStockValue = 0;
  let mostExpensiveProduct = products[0];
  let leastExpensiveProduct = products[0];
  let productsAbove100 = [];

  for (let i = 0; i < products.length; i++) {
    totalStockValue += products[i].price;

    if (products[i].price > 100) {
      productsAbove100.push(products[i].name);
    }
    // Mais caro
    if (products[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = products[i];
    }
    // Mais barato
    if (products[i].price < leastExpensiveProduct.price) {
      leastExpensiveProduct = products[i];
    }
  }
  showInfo.innerHTML = `
      Total de produtos: ${totalProducts} <br>
      Valor total do estoque: ${totalStockValue.toFixed(2)}R$ <br>
      Produto mais caro: ${mostExpensiveProduct.name} - R$ ${mostExpensiveProduct.price.toFixed(2)} <br>
      Produto mais barato: ${leastExpensiveProduct.name} - R$ ${leastExpensiveProduct.price.toFixed(2)} <br>
      Produtos acima de 100 reais: ${productsAbove100.join(", ")}
    `;
});

removeProductBtn.addEventListener("click", function () {
  const nameToRemove = removeProductNameInput.value;

  if (nameToRemove === "") {
    alert("Informe o nome do produto para remover");
    return;
  }

  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === nameToRemove) {
      products.splice(i, 1); // remove 1 item na posição i
      found = true;
      break;
    }
  }

  if (found) {
    alert("Produto removido com sucesso!");
    
  } else {
    alert("Produto não encontrado!");
  }

  removeProductNameInput.value = "";
  console.log(products);
});

function renderProducts() {

  let html = "";

  for (let i = 0; i < products.length; i++) {
    html += `
      <p>
        ${products[i].name} - R$ ${products[i].price.toFixed(2)}
      </p>
    `;
  }


  showInfo.innerHTML = html;
}
