const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const registerProduct = document.getElementById("registerProduct");
const productQuantity = document.getElementById("productQuantity");
const result = document.getElementById("result");
const totalPriceProducts = document.getElementById("totalPriceProducts");

let listProducts = [];
let idCount = 1;

function createProduct() {
  if (productName.value === "") {
    alert("Informe o nome do produto!");
    return;
  } else if (productPrice.value === "") {
    alert("Informe o valor do produto!");
    return;
  } else if (productQuantity.value === "") {
    alert("Informe a quantidade do produto!");
    return;
  }

  const product = {
    id: idCount,
    name: productName.value,
    price: Number(productPrice.value),
    quantity: Number(productQuantity.value),
  };

  listProducts.push(product);
  renderProducts();

  idCount++;
  productName.value = "";
  productPrice.value = "";
  productQuantity.value = "";

  console.log(listProducts);
}

function renderProducts() {
  const shelf = listProducts.map((product) => {
    return `
            <div class="flex">
                <p>Nome: ${product.name} | 
                    Preço: R$ ${product.price} |
                    Quantidade: ${product.quantity} | 
                    Valor total: R$ ${product.price * product.quantity} 
                </p>

                <button onclick="editPrice(${product.id})">Editar Preço</button>
                <button onclick="updateQuantity(${product.id})">Atualizar Qtd</button>
                <button onclick="removeProduct(${product.id})">Remover</button>
            </div>
        `;
  });

  result.innerHTML = shelf.join("");
  showTotalValue();
}

function editPrice(id) {
  const product = listProducts.find((p) => p.id === id);

  if (!product) return;

  const newPrice = prompt("Novo preço:");

  if (newPrice === null || newPrice === "") return;

  product.price = Number(newPrice);

  renderProducts();
}

function updateQuantity(id) {
  const product = listProducts.find((p) => p.id === id);

  if (!product) return;

  const newQuantity = prompt("Nova quantidade:");

  if (newQuantity === null || newQuantity === "") return;

  product.quantity = Number(newQuantity);

  renderProducts();
}

function removeProduct(id) {
  listProducts = listProducts.filter((product) => {
    return product.id !== id;
  });

  renderProducts();
}

function showTotalValue() {
  const totalPrice = listProducts.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  totalPriceProducts.innerHTML = `Valor total do estoque: ${totalPrice}`;
}

registerProduct.addEventListener("click", createProduct);
