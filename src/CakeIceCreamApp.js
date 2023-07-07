import React from "react";
//const redux = require("redux");
import { createStore } from "redux";



function CakeIceCreamApp() {
  // local variable starts with underscore _
  const _CONSTANTS = {
    ORDER_CAKE: "Order a cake",
    RESTOCK_CAKES: "Restock",
    ORDER_ICECREAM: "Order Ice Cream",
    RESTOCK_ICECREAMS: "Restock IceCreams",
    OFFER: "Today's offer"
  };

  // inital state
  const initialState = {
    numberOfCakes: 20,
    numberOfIceCreams: 30,
  };

  // CAKE ORDER
  function CakePlaceOrder() {
    return {
      type: _CONSTANTS.ORDER_CAKE,
      quantity: 3,
    };
  }

  // RESTOCK ORDER (cake)
  function ReStock() {
    return {
      type: _CONSTANTS.RESTOCK_CAKES,
      quantity: 10,
    };
  }

  // ICECREAM ORDER
  function IceCreamPlaceOrder() {
    return {
      type: _CONSTANTS.ORDER_ICECREAM,
      quantity: 5,
    };
  }

  // RESTOCK ORDER (icecreams)
  function ReStockIceCreams() {
    return {
      type: _CONSTANTS.RESTOCK_ICECREAMS,
      quantity: 10,
    };
  }

  // TODAY"S OFFER
  function Offer() {
    return{
        type: _CONSTANTS.OFFER,
        quantity: 1
    };
  }







  //reducer should always return a new state object
  //reducer is function that takes in state and action to be performed
  //description on this order is in action
  //reducer should not have changing logic..(immutability), definite logic for definite action type
  const reducer = (state = initialState, action) => {
    if (action.type === _CONSTANTS.ORDER_CAKE) {
      return {
        ...state, //Immutable -first you copy your state as it is …state, then make a change in required field, returns new copy of your state obj
        numberOfCakes: state.numberOfCakes - action.quantity, // - 3,  number of cakes is a state, so we are changeing our state
      };
    }

    // restock cakes
    if (action.type === _CONSTANTS.RESTOCK_CAKES) {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.quantity, // + 10
      };
    }

    // ice cream
    if (action.type === _CONSTANTS.ORDER_ICECREAM) {
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.quantity, // -5
      };
    }

    // restock IceCream
    if (action.type === _CONSTANTS.RESTOCK_ICECREAMS) {
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.quantity, // + 10
      };
    }

    // today's offer
    if (action.type === _CONSTANTS.OFFER) {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
        numberOfIceCreams: state.numberOfIceCreams - 5, // + 10
      };
    }

    return state; // if your action type does't match, you should return your state as it is, by default/if don't return then it would be undefined, use CONSTENTS
  };

  const store = createStore(reducer); //(deprecated) after ...state, store will have new copy of your states including original inital states will remain same
  //const store = createStore(reducer); //reducer is connected to the store
  console.log("Initial state for cake and iceCream is ..", store.getState()); //checking state, initialy I have 20 cakes
  console.log(" ");


  // when we restock we sending 10 quantity (add 10)
  store.dispatch(ReStock());
  console.log("State after restock: ", store.getState());
  console.log(" ");

  // restock icecreams
   store.dispatch(ReStockIceCreams());
   console.log("State after restock IceCreams: ", store.getState());
   console.log(" ");

   // offer 
   store.dispatch(Offer());
   console.log("State after today's offer..: ", store.getState());
   console.log(" ");


  
  // button functions
  function handleCakeorderClick() {
    store.dispatch(CakePlaceOrder());
    console.log("State", store.getState());
  }

  function handleIceCreamorderClick() {
    store.dispatch(IceCreamPlaceOrder());
    console.log("State after ordering iceCream.....", store.getState());
  }

  function handleOfferClick(){
    store.dispatch(Offer());
    console.log("State after offer....", store.getState());

  }

  return (
    <div style={styles.container}>
      <button onClick={handleCakeorderClick}>Cake Order</button>
      <br />
      <br />
      <button onClick={handleIceCreamorderClick}>IceCream Order</button>
      <br />
      <br />
      <button onClick={handleOfferClick}>Today's Offer</button>
    </div>
  );
}

export default CakeIceCreamApp;

const styles = {
  container: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
};


  // react
  // create buttons, order cake and restock cakes, order/ restock
  // on button click do dispetch
  // remeinig cakes--30
  // offer 10 cake 2 free ice cream
  // handel states using ui componenet
  // or sendbox or saparate
  // handles react to readix