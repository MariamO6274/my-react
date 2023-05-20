import React from "react";

const RestaurantCard = ({ title, user, description, imageUrl }) => {
  // console.log(props);
  // const {title, user, description, imageUrl} = props;

  return (
    <div className="container">
      <img className="caradImages" alt="card images" src={imageUrl} />
      <div class="line-4">
        <hr />
      </div>
      <h3>{title}</h3>
      <h5>{user}</h5>
      <p className="caradDescription">{description}</p>
    </div>
  );
};

export default RestaurantCard;
