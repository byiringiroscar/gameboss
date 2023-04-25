import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './detail.css';
import loading from '../images/loading.gif';

const Detail = () => {
  const { games, isLoading } = useSelector((state) => state.games);
  const { id } = useParams();
  const gameDetail = games.find((item) => item.id === parseInt(id, 10)) ?? {};
  if (isLoading) {
    return (
      <main>
        <img className="loading-screen" src={loading} alt="loading" />
      </main>
    );
  }
  return (
    <main className="main-detail">
      <div className="card-container-detail">
        <h2 className="movie-title">{gameDetail.title}</h2>
        <div className="card-detail">
          <div className="card-image-detail">
            <img className="image-detail" src={gameDetail.thumbnail} alt="gameImage" />
            <a target="_blank" href={gameDetail.game_url} rel="noreferrer">Play Game</a>
          </div>
          <div className="card-description">
            <p className="game-description">{gameDetail.short_description}</p>
            <h2 className="additional">Addition Information</h2>
            <div className="info">
              <p className="add">Developer</p>
              <p>{gameDetail.developer}</p>
            </div>
            <div className="info">
              <p className="add">Genre</p>
              <p>{gameDetail.genre}</p>
            </div>
            <div className="info">
              <p className="add">Platform</p>
              <p>{gameDetail.platform}</p>
            </div>
            <div className="info">
              <p className="add">Publisher</p>
              <p>{gameDetail.publisher}</p>
            </div>
            <div className="info">
              <p className="add">Release Date</p>
              <p>{gameDetail.release_date}</p>
            </div>
          </div>
        </div>
      </div>
      <a className="back" href="/">Back</a>
    </main>
  );
};

export default Detail;
