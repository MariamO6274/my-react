import React, { useState } from "react";
import "./Style.css";

const SearchBar = ({str1, cb }) => {
  // Step 1: Creat a state
  const [searchTerm, setSearchTerm] = useState("");

  function handleClick() {
    cb(searchTerm);
  }

  // Step 3: Steps for handleChange function
  // Step 4: Update state with eventDetail.target.value
  function handleChange(eventDetails) {
    setSearchTerm(eventDetails.target.value);
  }

  // Step 2: Create event handeler..onChange pass ref  of our function (to call back)
  // Step 5: Use value prop, value would be always update to the latest
  return (
    <>
      <h3 style={{ color: "white", marginBottom: "20px"}}>Search Term</h3>
      <div className="inputBox">
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        ></input>
        <button className="button" onClick={handleClick}>
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
