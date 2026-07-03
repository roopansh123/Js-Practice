import axios from "axios";
import { useEffect, useState } from "react";

const Books = () => {
  const [book, setBook] = useState([]);
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    async function getBooks() {
      let response = await axios.get(
        "https://potterapi-fedeperin.vercel.app/en/books",
      );

      setBook(response.data);
      isLoading(false);
      console.log(response.data);
    }

    getBooks();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      {book.map((b) => {
        return (
          <div>
            <img src={b.cover} />
            <h1> {b.title}</h1>
            <p>{b.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
