import "./Books.css";

const Books = ({ data }) => {
  return (
    <div className="books-container">
      {data.map((book) => (
        <div className="book-card" key={book.number}>
          <img src={book.cover} alt={book.title} className="book-image" />

          <div className="book-content">
            <h1 className="book-title">{book.title}</h1>

            <p className="book-description">{book.description}</p>

            <div className="book-details">
              <p>
                <span>📅 Release Date:</span> {book.releaseDate}
              </p>

              <p>
                <span>📖 Pages:</span> {book.pages}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
