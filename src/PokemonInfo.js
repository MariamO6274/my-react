import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

function PokemonInfo() {
  const [pokemonInfo, setPokemonInfo] = useState();

  useEffect(()=> {
  axios.get("https://pokeapi.co/api/v2/ability")
  .then((response) => {
    console.log(response);
    setPokemonInfo(response);
  });
  }, [])
  
  if (pokemonInfo === undefined)
  return <>Loading...</>
    return (
      <div>
        <br />
        Abilities is- 
        {pokemonInfo.data.results[0].name}
      </div>
    );
}

export default PokemonInfo

// if you want to show all the abilities you must map it
// {pokemonInfo.data.results[0].name} ---> would be like that
// {pokemonInfo.data.results.map(ability => ( <li> {ability.name} </li> ))}


//we can use 2 useEffects and 2 axiox or use promises

/**
 * useEffect (() => {
 *  let promise1 = axios.get ("some url")
 *  let promise2 = axios.get ("some 2nd url")
 * 
 *  let promises = [ ]
 * Promise.all(promises).then(response => {
 *    console.log()
 * })
 * 
 * promise1.then((response) => {
 *    console.log(response);
 *    setPokemonInfo(response);
 *  });
 * 
 * 
 *  promise2.then((response) => {
 *    console.log(response);
 *    setPokemonInfo2(response);
 *  });
 */