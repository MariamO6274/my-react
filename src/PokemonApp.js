import React, { useEffect } from "react";
import PokemonInfo from "./PokemonInfo";
import axios from "axios";
import { useState } from "react";

function PokemonApp() {
  const [counter, setCounter] = useState(0);

  const [data, setData] = useState()

  useEffect(() => {
    //axios returns a promise, therefor we need await (+ async) or .then
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((result) => {
      console.log(result.data); // store to state varable
      setData(result.data)
    });
  }, [counter]);

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Change it
      </button>
      <br />
      <br />
      {counter}
      <br />
      <br />
      <h4>Pocamon name is </h4>
      {data.name}
      <PokemonInfo />
    </div>
  );
}

export default PokemonApp;

// if we don't want to use async/await we can youc promises
// evrytime we use axios or fetch api we should never use without protection
// we have to incapsulated in useEffect
