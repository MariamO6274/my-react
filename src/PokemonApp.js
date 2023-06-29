import React from 'react'
import PokemonInfo from './PokemonInfo'
import axios from 'axios';

function  PokemonApp () {

    //axios returns a promise, therefor we need await (+ async) or .then
  axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((result) => {
    console.log(result);
  });
  return (
    <div>PokemonApp
        <PokemonInfo/>
    </div>
  )
}

export default PokemonApp

// if we don't want to use async/await we can youc promises
// evrytime we use axios or fetch api we should never use without protection 
// we have to incapsulated in useEffect 