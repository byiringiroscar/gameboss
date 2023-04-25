import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './header.css';
import menu from '../images/menu.png';
import logo from '../images/squid.png';
import { addSearched } from '../redux/games/gamesSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(addSearched(search));
  });
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <header>
      <img className="menu logo-mobile" src={menu} alt="menu" />
      <Link to="/">
        <div className="logo-desktop">
          <img src={logo} alt="logo-desk" />
          <h3 className="logo-text">
            Game
            <span>B</span>
            oss
          </h3>
        </div>
      </Link>
      <h3 className="title">Game Viewer</h3>
      <input value={search} onChange={handleSearch} type="text" placeholder="Filter Games" />
    </header>
  );
};

export default Header;
