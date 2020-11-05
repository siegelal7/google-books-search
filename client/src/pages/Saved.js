import React, { useState, useEffect } from "react";
// import savedContext from "../utils/savedContext";
import axios from "axios";

const Saved = () => {
  const [allBooks, setAllBooks] = useState([]);
  // const { books } = useContext(savedContext);

  useEffect(() => {
    axios.get("/api/books").then((response) => {
      // console.log(response.data);
      setAllBooks(response.data);
    });
  }, []);

  return (
    <div>
      {allBooks.map((i) => (
        <>
          <p>{i.title}</p>
          <p>{i.authors}</p>
        </>
      ))}
    </div>
  );
};

export default Saved;
