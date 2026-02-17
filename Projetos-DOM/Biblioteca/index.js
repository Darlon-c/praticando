const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const addBookBtn = document.getElementById("addBook");
const bookList = document.getElementById("bookList");
const stats = document.getElementById("stats");

let books = [];
let idCounter = 1;

// adicionar livros
addBookBtn.addEventListener("click", function () {
  if (titleInput.value === "") {
    alert("Informe o nome do livro");
    return;
  } else if (authorInput.value === "") {
    alert("Informe o nome do autor");
    return;
  } else if (yearInput.value === "") {
    alert("Informe o ano do livro");
    return;
  }

  const book = {
    id: idCounter,
    title: titleInput.value,
    author: authorInput.value,
    year: Number(yearInput.value),
    available: true,
  };

  books.push(book);
  //mudar o valor do id
  idCounter++;
  console.log(books);

  titleInput.value = "";
  authorInput.value = "";
  yearInput.value = "";

  showBooks();
});

// mostrar na tela
function showBooks() {
  let html = "";

  for (let i = 0; i < books.length; i++) {
    
    html += `
  <div class="p-3 bg-white rounded-xl shadow border text-sm">
    
    <h3 class="font-semibold truncate">
      ${books[i].title}
    </h3>

    <p class="text-gray-500 truncate">
      ${books[i].author}
    </p>

    <p class="text-xs text-gray-400">
      ${books[i].year}
    </p>

    <p class="mt-1 font-medium ${
      books[i].available ? "text-green-600" : "text-red-600"
    }">
      ${books[i].available ? "Disponível" : "Emprestado"}
    </p>

    <div class="mt-2 flex gap-1">
      <button
        onclick="borrowBook(${books[i].id})"
        class="flex-1 text-xs py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        ${books[i].available ? "Emprestar" : "Devolver"}
      </button>

      <button
        onclick="removeBook(${books[i].id})"
        class="flex-1 text-xs py-1 rounded bg-red-500 text-white hover:bg-red-600"
      >
        X
      </button>
    </div>
  </div>
`;
  }

  bookList.innerHTML = html;
  updateStats();
}

// mostrar estatísticas
function updateStats() {
  if (books.length === 0) {
    stats.innerHTML = "Nenhum livro cadastrado!";
    return;
  }

  let total = books.length;
  let availableCount = 0;
  let borrowedCount = 0;

  for (let i = 0; i < books.length; i++) {
    if (books[i].available) {
      availableCount++;
    } else {
      borrowedCount++;
    }
  }
  stats.innerHTML = `
    <div class="mt-4 p-4 bg-gray-100 rounded-xl shadow">
      <p><strong>Total:</strong> ${total}</p>
      <p class="text-green-600"><strong>Disponíveis:</strong> ${availableCount}</p>
      <p class="text-red-600"><strong>Emprestados:</strong> ${borrowedCount}</p>
    </div>
  `;
}

// mudar de disponivel para emprestado e de emprestado para disponivel
function borrowBook(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books[i].available = !books[i].available;
    }
  }
  showBooks();
}

// remover livro da lista
function removeBook(id) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      books.splice(i, 1);
      break;
    }
  }
  showBooks();
}
