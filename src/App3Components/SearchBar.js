import React from "react";

const SearchBar = ({ str1, cb }) => {
  function handleClick() {
    let searchTerm = document.getElementById("inpBox").value;

    cb(searchTerm);
  }

  return (
    <div>
      <input id="inpBox"></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
