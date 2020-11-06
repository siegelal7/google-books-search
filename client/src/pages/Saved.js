import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedCard from "../components/SavedCard";

const Saved = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    axios.get("/api/books").then((response) => {
      // console.log(response.data);
      setAllBooks(response.data);
    });
  };

  return (
    <div
      className="container"
      style={{ background: "lightgray", position: "relative" }}
    >
      {allBooks.map((book) => (
        <SavedCard
          title={book.title}
          authors={book.authors}
          description={book.description}
          link={book.link}
          image={book.image}
          id={book._id}
          loadBooks={loadBooks}
        />
      ))}
    </div>
  );
};

export default Saved;
