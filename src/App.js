import React from "react";
// import TodoList from "./TodoList";
import Card from "./Card";
import "./Style.css";
// import "./App.css";
// import siri_logo from "./images/siri_logo.png";
import alexa_logo from "./images/alexa_logo.png";
// import cortana_logo from "./images/cortana_logo.png";

function App() {
  return (
    <div className="cards">
      <Card
        title="Alexa"
        user="@alexa99"
        description="I'll help you buy stuff off Amazon"
        imageUrl={alexa_logo}/>
      <Card
        title="Cortana"
        user="@cortana12"
        description="Personal assistant by Microsoft"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Microsoft_Cortana_transparent.svg/1200px-Microsoft_Cortana_transparent.svg.png"
      />
      <Card
        title="Siri"
        user="@siri44"
        description="I don't get a lot of updates anymore"
        imageUrl="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/homepod/ios14-siri-icon.png"
      />
    </div>
  );
}

export default App;
// div className ="cardDisplay"

//  <TodoList />
//     <input type="text" />
//     <button> Add Tesk</button>
//     <div> 0 tesks left to do</div>
