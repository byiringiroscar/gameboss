import React from 'react';
import { useSelector } from 'react-redux';
import './main.css';
import Card from './Card';
import loading from '../images/loading.gif';

const Main = () => {
  const { games, isLoading } = useSelector((state) => state.games);
  if (isLoading) {
    return (
      <main>
        <img className="loading-screen" src={loading} alt="loading" />
      </main>
    );
  }
  return (
    <main>
      <div className="card-container">
        {games.map((item) => (<Card key={item.id} title={item.title} image={item.thumbnail} />))}
      </div>
    </main>
  );
};

export default Main;
