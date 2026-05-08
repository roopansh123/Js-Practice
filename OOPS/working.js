class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }

  rentout() {
    if (this.isAvailable == true) {
      this.isAvailable = false;
    } else {
      console.log(`${this.title} is already rented to someone else`);
    }
    console.log(`${this.title} is rented out successfully`);
  }

  returnBook() {
    if (this.isAvailable == false) {
      this.isAvailable = true;
    } else {
      console.log(`${this.title} is already returned`);
    }
    console.log(`${this.title} is  returned`);
  }
}

const book1 = new Book("dictionary");

console.log(book1);
