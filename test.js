const books = [
  { id: 1,
     title: "Name of the Wind",
      author: "Patrick Rothfuss", 
      read: true,
    },
  { id: 2,
     title: "Name of the Wind", 
  author: "Patrick Rothfuss", 
  read: true },
  { id: 3, title: "Name of the Wind", author: "Patrick Rothfuss", read: true },
  { id: 4, title: "Name of the Wind", author: "Patrick Rothfuss", read: true },
];
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title; 
    this.author = author;
    this.read = read;
  }
}
class Library {
  constructor(books) {
    this.bookCount = books.length;
    this.books = books;
  }
  addBook() {
    console.log("AddBook");
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById("read").checked;
    const newBook = new Book(this.bookCount + 1, title, author, read);
    this.books.push(newBook);
    this.bookCount++;
    console.log(this.books, this.bookCount);
    const tbody = document.getElementById("tableBody");
    const newTr = document.createElement("tr");
    const newTitle = document.createElement("td");
    const newAuthor = document.createElement("td");
    const newRead = document.createElement("td");
    newTitle.textContent = title;
    newAuthor.textContent = author;
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = read;
    newCheckbox.addEventListener("click", (event) => {
      this.markRead(event.target, newBook.id);
    });
    newRead.appendChild(newCheckbox);
    newTr.appendChild(newTitle);
    newTr.appendChild(newAuthor);
    newTr.appendChild(newRead);
    tbody.appendChild(newTr);
  }
  markRead(checkbox, id) {
    this.books.forEach((book) => {
      if (id === book.id) {
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    });
  }
  removeBook(bookId) {
    this.books = this.books.filter((book) => book.id !== bookId);
    this.bookCount = this.books.length;
    console.log(this.books, this.bookCount);
  }
}
const library = new Library(books);
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  library.addBook();
});
