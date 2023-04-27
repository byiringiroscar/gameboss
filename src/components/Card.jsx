import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (prop) => {
  const { gameId, title, image } = prop;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="game" />
      </div>
      <div className="card-text">
        <p>{title}</p>
        <NavLink to={`/info/${gameId}`}>
          <button type="button">View</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
