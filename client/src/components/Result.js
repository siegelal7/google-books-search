import React, { useState } from "react";
import axios from "axios";

const Result = (props) => {
  // const [savedBook, setSavedBook] = useState([]);
  const [state, setState] = useState({
    title: props.title,
    authors: props.authors,
    description: props.description,
    image: props.image,
    link: props.link,
  });

  const handleSave = (e) => {
    // console.log(e.target.find("p"));

    axios.post("/api/books", state).then((res) => {
      console.log(res);
    });
  };
  const handleView = (e) => {
    // console.log("clicked");
    let path = state.link;
    window.open(path);
  };
  const determineIfThumbnail = () => {};
  return (
    <div style={{ border: "1px solid black", position: "relative" }}>
      <img src={props.image} />
      <h4>{props.title}</h4>
      {props.authors.map((aut) => (
        <h5 key={aut} style={{ display: "inline" }}>
          {aut}{" "}
        </h5>
      ))}
      <p>{props.description}</p>
      <button
        onClick={handleSave}
        style={{ position: "absolute", top: "0", right: "5%" }}
      >
        Save
      </button>
      <button
        onClick={handleView}
        style={{ position: "absolute", top: "0", right: "0" }}
      >
        View
      </button>
    </div>
  );
};

export default Result;
