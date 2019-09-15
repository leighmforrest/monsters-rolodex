import React from "react";
import "./card.styles.css";

const Card = props => {
  const { monster } = props;
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=300x300`}
        alt="monster"
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
