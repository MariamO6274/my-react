import React from "react";
import { useState } from "react";

import "./App.css";
import AnimalShow from "./AnimalShow";

// Normal JS code can be written here

// If we want the component to re-render itself based on change in some variable (in this case: 'count').
// Then we need to make that variable a 'state' and then update that state through function.
// This will help React to understand that you would like to re-render the component.

function getRandomAnimal() {
  var animals = ["horse", "cat", "dog", "gator", "bird"];
  var randomNumber = Math.random();
  var myRange = randomNumber * animals.length;
  var myIndex = Math.floor(myRange);

  return animals[myIndex];
}

var App2 = () => {
  // Create an animal array state
  const [animalsList, setAnimal] = useState([]);

  function addAnimal() {
    // When we add animal, we will update state
    setAnimal([...animalsList, getRandomAnimal()]);
    console.log(animalsList);
  }

  var animalsToRender = animalsList.map((animal) => {
    return <AnimalShow type={animal} />;
  });

  return (
    <>
      <button onClick={addAnimal}>Add Animal</button>
      <div style={{ display: "flex", "flex-wrap": "wrap" }}>
        {animalsToRender}
      </div>
    </>
  );
};

export default App2;

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
