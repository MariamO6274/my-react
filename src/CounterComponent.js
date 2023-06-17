import React, { useState } from "react";

function CounterComponent() {
  // Stste variables
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");


  //Button callbacks
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };


  //Input box callback
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  //Add button callback
  const handleAddButtonClick = () => {

    //Since we need only integers
    const numberToAdd = parseInt(inputValue);
    if (!isNaN(numberToAdd)) {
      setCounter(counter + numberToAdd);
      setInputValue("");
    }
  };
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <br />
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddButtonClick}>Add</button>
    </div>
  );
}

export default CounterComponent;







// import React, { useState } from "react";

// var AddApp = () => {
//   var [count, setCount] = useState(0); 
  
//   function decriment() {
//     setCount(count - 1);
//   }
//   function increament() {
//     setCount(count + 1);
//   }

//   function handChange(eventDetails) {
//     setCount(eventDetails.target.value);
//   }
//   return (
//     <>
//       <input
//         value={count}
//         placeholder="Enter enter number"
//         onChange={handChange}
//       ></input>

//       <button onClick={increament}>Add</button>
//       <span>{count}</span>
//       <button onClick={decriment}>Subscribe</button>
//     </>
//   );
// };

// export default AddApp;
