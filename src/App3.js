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


//ეს კოდი გადმოვიტანე აპპ 2 დან და ისევ ჩასამატებელია
/**
 import React from "react";
import RandomGenerator from "./RandomGenerator";
import { useState } from "react";
// import "./App.css";

const imageArr = ["bird", "cat", "dog", "gator", "heart", "horse"];


// //get a random index
// var randomPhotoIndex = Math.floor(Math.random() * imageArr.length);

// //get an image at the randomPhotoIndex
// var selectedPhoto = imageArr[randomPhotoIndex];

var randomPhotoIndex = Math.floor();
var myRange = randomPhotoIndex * imageArr.length;
var myIndex = Math.floor(myRange)

function App2() {
  var counter = 0;

  const [imageCount, setImageCount] = useState(0);

  var imageList = [];

  for (let i = 0; i < imageCount; i++) {
    // console.log(imageArr[myIndex]);

    imageList.push(<RandomGenerator type={imageArr[myIndex]} key={i}/>);
  }
//   type={imageArr[selectedPhoto]} wrong!!

  function getMoreImages() {
    counter += 1;
    setImageCount(imageCount + 1);
  }

  return (
    <>
      {imageCount}
      <button className="randomButton" onClick={getMoreImages}>
        Random Image
      </button>
      <RandomGenerator />
      {imageList}
    </>
  );
}

export default App2;
 */
