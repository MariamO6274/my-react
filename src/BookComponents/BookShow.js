import React, { useState } from "react";
import BookEdit from "./BookEdit";

import { useContext } from "react";
import BooksContext from "./contexts/BooksContext";

const BookShow = ({ book }) => {
  const val = useContext(BooksContext);
  console.log(val);

  const [showEdit, setShowEdit] = useState(false);

  function handleDeleteClick() {
    //onDelete(book);
    val.deleteBookUsingContext(book);
  }

  function handleEditClick() {
    setShowEdit(!showEdit);
  }

  let contentToDisplay = book;
  if (showEdit) contentToDisplay = <BookEdit book={book} />;

  return (
    <div>
      <br />
      {contentToDisplay}
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default BookShow;
