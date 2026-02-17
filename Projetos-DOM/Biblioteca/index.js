const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const addBookBtn = document.getElementById("addBook");
const bookList = document.getElementById("bookList");
const stats = document.getElementById("stats");

let books = [];
let idCounter = 1;

addBookBtn.addEventListener("click", function () {

    if(titleInput.value === '') {
        alert("Informe o nome do livro")
    }

  book = {
    id: idCounter,
    title: titleInput.value,
    author: authorInput.value,
    year: Number(yearInput.value),
    available: true,
  };

  books.push(book)
  console.log(books)

});
