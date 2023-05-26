import React from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const testerImages = {
  "bird": bird,
  "cat": cat,
  "dog": dog,
  "gator": gator,
  "heart": heart,
  "horse": horse
};



const RandomGenerator = ({type}) => {
  return (
    <div className="mainContainer">
      <img src={testerImages[type]} alt={""}></img>
    </div>
  );
};

export default RandomGenerator;



/**
import React from "react";
import tester1 from "./images/tester1.jpg";
import tester2 from "./images/tester2.jpg";
import tester3 from "./images/tester3.jpg";
import tester4 from "./images/tester4.jpg";

const testerImages = {
  tester1: tester1,
  tester2: tester2,
  tester3: tester3,
  tester4: tester4,
};
console.log(tester4);
 */