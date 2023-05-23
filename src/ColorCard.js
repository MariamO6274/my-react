import React, { useState } from "react";

var ColorCard = () => {
  var [showColor, setShowColor] = useState("red");

  return (
    <>
      <div className="buttonContainer">
        <p>Coosen color {showColor}</p>
        <button onClick={() => setShowColor("green")}>Color Button</button>
        
        
      </div>
    </>
  );
};

export default ColorCard;


/**
 * <input type="color"/> line 11 make a color picker
 */