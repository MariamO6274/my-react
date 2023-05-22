import React, { useState } from "react";

var PluseMinus = () => {

    var [count, setCount] = useState(10) //default state (let's say our counter will start at 10)
    //1.current state at every single iteration of our render function here and 2.function that allows you to update that current state
  
  function decrementCount() {
    setCount(count - 1)
  }
  //we can now update our count by decreasing it by 1 
  //and everytime we call this set count (our update function) 
  //it's going to re-render our component with the new value for our count
  function incrementCount() {
    setCount(count + 1);
  }
    return (
      <>
        <button onClick={decrementCount}>Minus</button>
        <span>{count}</span>
        <button onClick={incrementCount}>Plus</button>
      </>
    );
};

export default PluseMinus;



//when you update the state your component re renders

/**
function decrementCount() {
  setCount(prevCount => prevCount - 1);
}
 */
