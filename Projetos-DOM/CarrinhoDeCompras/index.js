const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");
const addProduct = document.getElementById("addProduct");
const productList = document.getElementById("productList");
const mostExpensiveElement = document.getElementById("mostExpensive");
const cheapestElement = document.getElementById("cheapest");
const totalItemsElement = document.getElementById("totalItems");
const clearCart = document.getElementById("clearCart");

let cart = [];

addProduct.addEventListener("click", function () {
  if (productName.value === "") {
    alert("Informe o nome do produto");
    return;
  }
  if (productPrice.value === "") {
    alert("Informe o valor do produto");
    return;
  }
  if (productQuantity.value === "") {
    alert("Informe a quantidade do produto");
    return;
  }

  const product = {
    name: productName.value,
    price: Number(productPrice.value),
    quantity: Number(productQuantity.value),
  };

  cart.push(product);
  renderCart();

  productName.value = "";
  productPrice.value = "";
  productQuantity.value = "";

  console.log(cart);
});

// Mostrar na tela
function renderCart() {
  if (cart.length === 0) {
    productList.innerHTML = "";
    totalItemsElement.innerHTML = "";
    mostExpensiveElement.innerHTML = "";
    cheapestElement.innerHTML = "";
    totalItemsElement.innerHTML = "";
    return;
  }

  let html = "";
  let totalValueCart = 0;
  let mostExpensive = cart[0];
  let cheapest = cart[0];

  for (let i = 0; i < cart.length; i++) {
    let totalItem = cart[i].price * cart[i].quantity;
    totalValueCart += totalItem;

    html += `
      <p>
        ${cart[i].name} - 
        R$ ${cart[i].price.toFixed(2)} x 
        ${cart[i].quantity} = 
        R$ ${totalItem.toFixed(2)}
      </p>
    `;

    if (totalItem > mostExpensive.price * mostExpensive.quantity) {
      mostExpensive = cart[i];
    }

    if (totalItem < cheapest.price * cheapest.quantity) {
      cheapest = cart[i];
    }
  }

  // desconto acima de 500(5%) e 1000(10%)
  let discount = 0;
  let finalValue = totalValueCart;

  if (totalValueCart > 1000) {
    discount = totalValueCart * 0.1;
  } else if (totalValueCart > 500) {
    discount = totalValueCart * 0.05;
  }

  finalValue = totalValueCart - discount;

  // Frete gratis

  let shipping = 50;
  let freeShippingLimit = 800;
  let message = "";

  if (totalValueCart >= freeShippingLimit) {
    shipping = 0;
    message = "Você ganhou Frete Grátis";
  } else {
    let remaining = freeShippingLimit - totalValueCart;
    message = `Faltam R$ ${remaining.toFixed(2)} para conseguir o frete grátis`;
  }

  finalValue = finalValue - discount + shipping;

  productList.innerHTML = html;
  totalItemsElement.innerHTML = `
    <p class="px-1 py-2">Subtotal: R$ ${totalValueCart.toFixed(2)}</p>
    <p>Desconto: R$ ${discount.toFixed(2)}</p>
    <p>Frete: ${shipping === 0 ? "GRÁTIS" : "R$ " + shipping.toFixed(2)}</p>
    <p><strong>Total com desconto: R$ ${finalValue.toFixed(2)}</strong></p>
    <p class="text-blue-600 font-semibold">${message}</p>
  `;
  mostExpensiveElement.innerHTML = `<p>Mais caro: ${mostExpensive.name}</p>`;
  cheapestElement.innerHTML = `<p>Mais barato: ${cheapest.name}</p>`;
}

// Limpar carrinho

clearCart.addEventListener("click", function () {
  if (confirm("Tem certeza que deseja limpar o carrinho?")) {
    cart = [];
    renderCart();
  }
});
