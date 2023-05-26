import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";



function getRandomAnimal() {
  var animals = ["horse", "cat", "dog", "gator", "bird"];
  var randomNumber = Math.random();
  var myRange = randomNumber * animals.length;
  var myIndex = Math.floor(myRange);

  return animals[myIndex];
}

var App2 = () => {
  const [animalsList, setAnimal] = useState([]); // animal array state

  function handleClick() {
    console.log("Button clicked....");
    setAnimal([...animalsList, getRandomAnimal()]);
    console.log(animalsList);
  }
  // we do not do animals.push because it modifies a piece of state

  var animalsToRender = animalsList.map((animal) => {
    return <AnimalShow type={animal} />;
  });
  //Map function will iterate through every animal and create a array of component list

  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div >
        {animalsToRender}
      </div>
    </>
  );
};

export default App2;

