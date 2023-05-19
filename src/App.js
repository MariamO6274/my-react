import React from "react";
// import TodoList from "./TodoList";
import Card from "./Card";
// import "./Style.css";
import "./App.css";
// import siri_logo from "./images/siri_logo.png";
// import alexa_logo from "./images/alexa_logo.png";
// import cortana_logo from "./images/cortana_logo.png";

function App() {
  //show another component
  //
  return (
    <>
      <div className="cards">
        <Card
          description="KFC description"
          title="KFC"
          imageUrl="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=29.13"
        />
        <Card
          title="McDonalds"
          description="McDonalds description"
          imageUrl="https://www.shutterstock.com/image-photo/ayutthayathailand-march-7-2018-view-260nw-1181606473.jpg"
        />
        <Card
          title="SubWay"
          description="SubWay description"
          imageUrl="https://i.pinimg.com/originals/4b/eb/2a/4beb2a37a5810f9eacc37e3c6234889c.png"
        />
      </div>
    </>
  );
}

export default App;
// div className ="cardDisplay"


  //  <TodoList />
  //     <input type="text" />
  //     <button> Add Tesk</button>
  //     <div> 0 tesks left to do</div>