const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const addBookBtn = document.getElementById("addBook");
const bookList = document.getElementById("bookList");
const stats = document.getElementById("stats");
const showStats = document.getElementById("showStats");

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
        <p>
           Nome: ${books[i].title}  <br>
           Autor: ${books[i].author} - (${books[i].year}) <br>
           Status: ${books[i].available ? "Disponível" : "Emprestado"} <br>
            <button
                onclick="borrowBook(${books[i].id})"
                class="px-1 py-1 bg-gray-200 rounded-xl hover:bg-gray-400 hover:font-semibold"
                >
                ${books[i].available ? "Emprestar" : "Devolver"}
            </button>
            <button
                onclick="removeBook(${books[i].id})"
                class="px-1 py-1 bg-gray-200 rounded-xl hover:bg-gray-400 hover:font-semibold"
                >
                Remover
            </button>

        </p>
    `;
  }

  bookList.innerHTML = html;
}

// mostrar estatísticas

showStats.addEventListener("click", function () {
  let total = books.length;
  let availableCount = 0;
  let borrowedCount = 0;

  if (books.length === 0) {
    stats.innerHTML = "Nenhum livro cadastrado!";
    return;
  }

  for (let i = 0; i < books.length; i++) {
    if (books[i].available) {
      availableCount++;
    } else {
      borrowedCount++;
    }

    stats.innerHTML = `
        <p>Total de livros: ${total}</p>
        <p>Disponíveis: ${availableCount}</p>
        <p>Emprestados: ${borrowedCount}</p>
    `;
  }
});

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
