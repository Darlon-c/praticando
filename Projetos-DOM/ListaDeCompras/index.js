const textInput = document.getElementById("textInput");
const addPurchase = document.getElementById("addPurchase");
const shoppingBasket = document.getElementById("shoppingBasket");

let purchase = [];
let idCount = 1;

function showPurchase() {
  for (let i = 0; i < purchase.length; i++) {
    let buy = purchase[i];
    const li = document.createElement("li");

    li.className =
      "flex items-center justify-between gap-2 p-3 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow";

    li.innerHTML = `<span class="flex-1 break-words">${buy.name}</span>`;
  
     shoppingBasket.appendChild(li)
  }

 

}

function addNewPurchase() {
  if (textInput.value === "") {
    alert("Por favor, informe sua compra");
  }

  const newPurchase = {
    id: idCount,
    name: textInput.value,
    purchased: true,
  };

  purchase.push(newPurchase);
  showPurchase();
  idCount++;
  textInput.value = "";
}


addPurchase.addEventListener("click", addNewPurchase);
