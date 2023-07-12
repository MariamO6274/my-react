import React, { useReducer } from "react";

function AppReducer() {
  // const [counter, setCounter] = useState(0);
  // const [inputValue, setInputValue] = useState("");

  //useReducer hook
  function reducer(state, action) {
    console.log("Reducer function called..");
    console.log(action);
    if (action.type === "increment") {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    if (action.type === "decrement") {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    // inputValue
    if (action.type === "getValue") {
      return {
        ...state,
        inputValue: action.payload,
      };
    }
    // add
    if (action.type === "add") {
      return {
        ...state,
        count: state.count, //??
      };
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    inputValue: 0,
  });



//Buttons
  const incrementCounter = () => {
    // setCounter(counter + 1);
    dispatch({
      type: "increment",
    });
  };

  const decrementCounter = () => {
    // setCounter(counter - 1);
    dispatch({
      type: "decrement",
    });
  };

  const handleInputChange = (event) => {
    // setInputValue(event.target.value);
    dispatch({
      type: "getValue",
      payload: event.target.value,
    });
  };

  const handleAddButtonClick = () => {
    // const numberToAdd = parseInt(inputValue);
    // if (!isNaN(numberToAdd)) {
    //   setCounter(counter + numberToAdd);
    //   setInputValue("");
    // }
    dispatch({
      type: "add",
      // payload:
    });
  };
  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <br />
      <input
        type="number"
        value={state.inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddButtonClick}>Add</button>
    </div>
  );
}

export default AppReducer;

// comment out all state related lines
// we will use reducer

// it takes reducer function as input

// Reducer will return state variable and dispetch
// useReducer(here) will take a reducer function, can be named anything
// then we write reduser function, it is same as setInputValue (sets input value for you)
// dispech will make sure that reducer function is called
// whaterver logic we have, it will go on reducer
// you have one function for all your states
// reducer(function) takes state AND action as an argument
// instead of setState function we will write now dispach (all comment outed codes will be dispatch)

// in useReducer we create one single state, and make it as an object
// this object contains different state variables
// to access these variables-> state.counter AND state.inputValue

// Everyone is calling dispatch function
// if you call same function to all different operation how will it know??
// we will send som info
// to understand who is calling we will giva a type AND value/payload to dispatch
// Ex. dispatch({
//    type1: 'increment'
//    })
// one change would be in reduce function and one would be on operation

// Difference
// for each variable we had different useState
// useState offers simplycity
// in useReducer we create one single state, and make it as an object
// this object contains different state variables
