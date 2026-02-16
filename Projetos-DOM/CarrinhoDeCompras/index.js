const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productQuantity = document.getElementById("productQuantity");
const addProduct = document.getElementById("addProduct");
const productList = document.getElementById("productList");
const mostExpensiveElement = document.getElementById("mostExpensive");
const cheapestElement = document.getElementById("cheapest");
const totalItemsElement = document.getElementById("totalItems");

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

function renderCart() {

    if (cart.length === 0) {
  productList.innerHTML = "";
  totalValueElement.innerHTML = "";
  mostExpensiveElement.innerHTML = "";
  totalItemsElement.innerHTML = "";
  return;
}


  let html = "";
  let totalValueCart = 0;
  let mostExpensive = cart[0];
  let cheapest = cart[0]

  for (let i = 0; i < cart.length; i++) {
    let totalItem = cart[i].price * cart[i].quantity;
    totalValueCart += cart[i].price * cart[i].quantity;

    html += `
      <p>
        ${cart[i].name} - 
        R$ ${cart[i].price.toFixed(2)} x 
        ${cart[i].quantity} = 
        R$ ${totalItem.toFixed(2)}
      </p>
    `;

    if (
      cart[i].price * cart[i].quantity >
      mostExpensive.price * mostExpensive.quantity
    ) {
      mostExpensive = cart[i];
    }
    if (cart[i].price * cart[i].quantity < cheapest.price * cheapest.quantity) {
      cheapest = cart[i];
    }
  }

  productList.innerHTML = html;
  totalItemsElement.innerHTML = `<p>Valor total: ${totalValueCart.toFixed(2)}</p>`;
  mostExpensiveElement.innerHTML = `<p>Mais caro: ${mostExpensive.name} - ${mostExpensive.price.toFixed(2)}</p>`;
  cheapestElement.innerHTML = `<p>Mais barato: ${cheapest.name} - R$ ${(cheapest.price * cheapest.quantity).toFixed(2)}</p>`;
}
