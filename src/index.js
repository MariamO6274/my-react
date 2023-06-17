import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import App2 from "./App2";
// import { App3 } from "./App3";
// import  BookApp from "./BookApp";
import AppReducer from "./useReducerApp/AppReducer"



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// root.render(<App2/>);

// root.render(<App3 />);

// root.render(<BookApp />);
root.render(<AppReducer />);