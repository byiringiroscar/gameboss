import React from 'react';
import { useSelector } from 'react-redux';
import './main.css';
import Card from './Card';

const Main = () => {
  const { games, isLoading } = useSelector((state) => state.games);
  if (isLoading) {
    return (
      <main>
        <h2>Loading .....</h2>
      </main>
    );
  }
  return (
    <main>
      <div className="card-container">
        {games.map((item) => (<Card key={item.id} />))}
      </div>
    </main>
  );
};

export default Main;
