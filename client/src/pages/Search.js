import React, { useState } from "react";
import API from "../utils/API";
import Result from "../components/Result";

const Search = () => {
  const [titleState, setTitleState] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    let { value } = e.target;
    // console.log(value);
    setTitleState(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBook(titleState).then((res) => {
      // console.log(res.data.items);
      setResults(res.data.items);
    });
  };

  // const determineIfThumbnail = () => {
  //   if (){
  //     return
  //   }
  // };
  return (
    <div>
      <form style={{ border: "0.5px solid black", marginBottom: "1%" }}>
        <div className="form-group">
          <label htmlFor="title">Search</label>
          <input
            type="Search"
            className="form-control"
            name="Search"
            value={titleState}
            onChange={handleInputChange}
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
      <div className="container">
        <h3>Results:</h3>
        <div className="row">
          <div className="col-12">
            {results === undefined || results.length === 0
              ? "Sorry, there are no results for that title"
              : results.map((res) => (
                  <Result
                    key={res.selfLink}
                    title={res.volumeInfo.title}
                    authors={res.volumeInfo.authors}
                    description={res.volumeInfo.description}
                    link={res.volumeInfo.infoLink}
                    image={
                      res.volumeInfo.imageLinks === undefined
                        ? ""
                        : res.volumeInfo.imageLinks.thumbnail
                    }
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
