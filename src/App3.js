import React from "react";
import "./App.css";
import ImageList from "./App3Components/ImageList";
import SearchBar from "./App3Components/SearchBar";

// Normal JS code can be written here

// If we want the component to re-render itself based on change in some variable (in this case: 'count').
// Then we need to make that variable a 'state' and then update that state through function.
// This will help React to understand that you would like to re-render the component.

var App3 = () => {
  let myCar = "Honda";

  function callMe(searchTerm) {
    console.log("Call me function is called....");
    console.log("Query param is :" + searchTerm);
  }

  // Next steps: to call the fetch function and pass it the searchTerm
  // It should return us some imag list
  // Pass this imageList to ImageList component

  var images = [];

  return (
    <>
      <SearchBar str1={myCar} cb={callMe} />
      <ImageList imgList={images} />
    </>
  );
};

export { App3 };
