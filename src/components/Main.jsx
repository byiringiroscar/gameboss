import React from 'react';
import { useSelector } from 'react-redux';
import './main.css';
import Card from './Card';
import loading from '../images/loading.gif';

const Main = () => {
  const { games, isLoading, searched } = useSelector((state) => state.games);
  if (isLoading) {
    return (
      <main>
        <img className="loading-screen" src={loading} alt="loading" />
      </main>
    );
  }
  const searchedGames = games.filter((game) => game.title.toLowerCase().includes(searched.toLowerCase()) // eslint-disable-line max-len
  || game.genre.toLowerCase().includes(searched.toLowerCase())); // eslint-disable-line max-len
  return (
    <main>
      <div className="card-container">
        {searchedGames.length === 0 ? (
          <h1 className="no-result">No Results Found!</h1>
        ) : (
          searchedGames.map((item) => (
            <Card key={item.id} gameId={item.id} title={item.title} image={item.thumbnail} />
          ))
        )}
      </div>
    </main>
  );
};

export default Main;
