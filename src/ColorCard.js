import React, { useState } from "react";

var ColorCard = () => {
  var [showColor, setShowColor] = useState("");

  return (
    <>
      <div>
        <p>Choose your color {showColor}</p>
        <button onClick={() => setShowColor}>Color Button</button>
      </div>
    </>
  );
};

export default ColorCard;
