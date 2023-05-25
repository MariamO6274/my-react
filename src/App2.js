import React from "react";
import RandomGenerator from "./RandomGenerator";
import { useState } from "react";
import "./App.css";

const imageArr = ["tester1", "tester2", "tester3", "tester4"];

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
    console.log(imageArr[myIndex]);

    imageList.push(<RandomGenerator type={imageArr[myIndex]} />);
  }
//   type={imageArr[selectedPhoto]} wrong!!

  function getMoreImages() {
    counter += 1;
    setImageCount(imageCount + 1);
  }

  return (
    <>
      <button className="randomButton" onClick={getMoreImages}>
        Random Image
      </button>
      <RandomGenerator />
      {imageList}
    </>
  );
}

export default App2;
