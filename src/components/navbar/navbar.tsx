import React from 'react';
import logo from '../../asset/logo.svg';
import goeverywhere from '../../asset/goeverywhere.svg';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="title-wrap">
        <img src={logo} alt="logo" />
        <p className="title">방구석 세계여행</p>
      </div>
      <div className="everywhere-wrap">
        <img src={goeverywhere} alt="goeverywhere" />
        <p className="everywhere-text">아무 곳이나 여행하기</p>
      </div>
    </nav>
  );
}

export default Navbar;
