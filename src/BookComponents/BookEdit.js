import React from "react";

import { useContext } from "react";
import BooksContext from "./contexts/BooksContext";

const BookEdit = ({ book }) => {
  const val = useContext(BooksContext);
  console.log(val);

  function handleSaveClick() {}

  return (
    <>
      <input value={book}></input>
      <button onClick={handleSaveClick}>Save</button>
    </>
  );
};

export default BookEdit;
