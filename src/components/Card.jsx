import React from 'react';

const Card = (prop) => {
  const { title, image } = prop;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="game" />
      </div>
      <div className="card-text">
        <p>{title}</p>
        <button type="button">View</button>
      </div>
    </div>
  );
};

export default Card;
