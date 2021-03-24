import React from 'react';
import { Link } from 'react-router-dom';

function Header({ openMobilePopup }) {

  return (
      <header className="header">
        <h1 className="header__text">NewsExplorer</h1>
        <Link to="/" className="header__link"><button className="header__button-home">Home</button></Link>
        <Link to="/signin"><button className="header__button-signin">Sign in</button></Link>
        <button className="header__button-mobile" onClick={openMobilePopup}></button>
      </header>
  );
}

export default Header;
