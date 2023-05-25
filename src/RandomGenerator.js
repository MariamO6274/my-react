import React from 'react'
import tester1 from "./images/tester1.jpg";
import tester2 from "./images/tester2.jpg";
import tester3 from "./images/tester3.jpg";
import tester4 from "./images/tester4.jpg"

const testerImages = {
  "tester1": tester1,
  "tester2": tester2,
  "tester3": tester3,
  "tester4": tester4
  
};
console.log(tester4)

const RandomGenerator = ({type}) => {
  return (
    <div className="mainContainer">
      <img src={testerImages[type]} alt={""}></img>
    </div>
  );
};



export default RandomGenerator;