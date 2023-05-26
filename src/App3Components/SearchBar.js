import React, { useState } from "react";

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
    <div>
      <input value={searchTerm} onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
