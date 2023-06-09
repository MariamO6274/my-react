import React, { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird: bird,
  cat: cat,
  dog: dog,
  gator: gator,
  heart: heart,
  horse: horse,
};

const AnimalShow = ({type}) => {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }
  //To increase the size on every click, we will have to control the styling of heart based on click value.
  
  return (
    <div onClick={handleClick}>
      <img alt="animal" src={svgMap[type]}></img>
      <img
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
        src={svgMap["heart"]}
      ></img>
    </div>
  );
};

export default AnimalShow;
