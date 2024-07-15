// PROJECT Section
console.log("PROJECT:\n==========\n");
/*
Create a class 'Book' rhat has the following properties:
-Title(strng)
-Author(strng)
-Read(strng)
Create a class `Library` that has the following properties and methods:
- Book count (number)
- Books (array of books)
- `markRead` method that will:
  - Take in a parameter `checkbox` and `id`
  - Loop through the library books
  - If the book id is the same as the param id, change the book read property to true, the `checkbox` checked attribute to true, and the `checked` disabled attribute to true
- `addBook` method that will:
  - Select the title input value, author input value, and read checkbox value
  - Use the book constructor to create a new book, passing in the input value, author value, and read checkbox value as params
  - Create a new table row
  - Create new table cells `title`, `author` and `read` properties of the newly added book
  - Append the new table cells to the newly created row
  - Select the table body
  - Append the new row to the table body
  - Increment library `bookCount` by one
3. Select the `Add Book` button from your index.html
4. Add an event listener to the button element that listens for a `click` event, and calls the library `addBook`*/
const books = [
  {
    id: 1,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
  },

  {
    id: 2,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
  },

  {
    id: 3,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
  },

  {
    id: 4,
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
  },
];

class Book {
  constructor(title, author, read) {
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
    const title = document.getElementById("title)")
    const author = document.getElementById("author")
    const read = document.getElementById("read")
    const newBook = new Book(title.value, author.value, read.checked);

    this.books.push(newBook);
    this.bookCount++;

    console.log(this.books, this.bookCount);

    const tbody = document.getElementById("tableBody");
    const newTr = document.createElement("tr");

newTr.classList.add(book ? book.id : newBook.id);
newTr.addEventListener("dblclick", () => {
  this.removeBook(book ? book.id : newBook.id);
})

    const newTitle = document.createElement("td");
    const newAuthor = document.createElement("td");
    const newRead = document.createElement("td");

    newTitle.textContent = title.value;
    newAuthor.textContent = author.value;
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = read.checked;
    newRead.appendChild(newCheckbox);
    newCheckbox.addEventListener("click", (event) => {
      this.markRead(event.target, book.id,  newBook.id,  event.target.id);
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
}

removeBook(bookId) {
this.book = this.books.filter((( id )) => bookId !== id) 

}



const library = new Library(books);
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  library.addBook();
});


