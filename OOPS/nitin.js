class Book {
  set(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }
}

let book1 = new Book();
book1.set("The Great Gatsby", "F. Scott Fitzgerald");
console.log(book1);
