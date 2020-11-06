import React, { useState, useEffect } from "react";
// import savedContext from "../utils/savedContext";
import axios from "axios";
import SavedCard from "../components/SavedCard";

const Saved = () => {
  const [allBooks, setAllBooks] = useState([]);
  // const { books } = useContext(savedContext);

  useEffect(() => {
    axios.get("/api/books").then((response) => {
      // console.log(response.data);
      setAllBooks(response.data);
    });
  }, []);

  // const handleDelete = () => {
  //   axios.delete("/api/books/:id").then((res) => {
  //     console.log(res);
  //     // setAllBooks([...allBooks, ])
  //   });
  // };

  // const handleView = () => {
  //   let path = allBooks.link;
  //   window.open(path);
  // };
  return (
    <div
      className="container"
      style={{ background: "lightgray", position: "relative" }}
    >
      {allBooks.map((book) => (
        // <div
        //   className="row"
        //   style={{ border: "1px solid black", position: "relative" }}
        // >
        //   <div className="col-12">
        //     <img src={book.image} style={{ float: "left" }} />
        //     <h4>{book.title}</h4>
        //     <h5>{book.authors}</h5>
        //     <p>{book.description}</p>
        //     <button
        //       onClick={handleDelete}
        //       style={{ position: "absolute", top: "0", right: "0" }}
        //     >
        //       Delete
        //     </button>
        //     <button
        //       onClick={handleView}
        //       style={{ position: "absolute", top: "0", right: "5.5%" }}
        //     >
        //       View
        //     </button>
        //   </div>
        // </div>
        // console.log(book)
        // <>
        //   <p>{book.title}</p>
        //   <p>{book.authors}</p>
        // </>
        <SavedCard
          title={book.title}
          authors={book.authors}
          description={book.description}
          link={book.link}
          image={book.image}
          id={book._id}
        />
      ))}
    </div>
  );
};

export default Saved;
