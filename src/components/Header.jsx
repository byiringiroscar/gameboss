import React from 'react';
import './header.css';
import menu from '../images/menu.png';
import logo from '../images/squid.png';

const Header = () => (
  <header>
    <img className="menu logo-mobile" src={menu} alt="menu" />
    <div className="logo-desktop">
      <img src={logo} alt="logo-desk" />
      <h3 className="logo-text">
        Game
        <span>B</span>
        oss
      </h3>
    </div>
    <h3 className="title">Game Viewer</h3>
    <input type="text" placeholder="Filter Games" />
  </header>
);

export default Header;
