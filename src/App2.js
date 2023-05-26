import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";


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

