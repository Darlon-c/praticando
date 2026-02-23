const inputNumber = document.getElementById("inputNumber");

const result = document.getElementById("result");

const products = [
  { name: "Notebook", price: 3000 },
  { name: "Mouse", price: 100 },
  { name: "Teclado", price: 200 },
  { name: "Monitor", price: 1200 },
];

inputNumber.addEventListener("input", () => {
  const valueEntered = Number(inputNumber.value);

  if (!inputNumber.value) {
    showProducts(products);
    return;
  }

  const filteredProducts = products.filter(
    (product) => product.price > valueEntered,
  );

  showProducts(filteredProducts);
});

function showProducts(productsToDisplay) {
  result.innerHTML = "";

  if (productsToDisplay.length === 0) {
    result.innerHTML = "<p>Nenhum produto encontrado</p>";
    return;
  }

  productsToDisplay.forEach((product) => {
    const p = document.createElement("p");
    p.textContent = `${product.name} - ${product.price}`;
    result.appendChild(p);
  });
}


