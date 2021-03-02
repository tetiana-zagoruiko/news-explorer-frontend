import React from 'react';
import { Link } from 'react-router-dom';

function Header({ openPopup, openMobilePopup }) {

  return (
    <div>
      <header className="header">
        <h1 className="header__text">NewsExplorer</h1>
        <Link to="/" className="header__link"><button className="header__button-home">Home</button></Link>
        <button className="header__button-signin" onClick={openPopup}>Sign in</button>
        <button className="header__button-mobile" onClick={openMobilePopup}></button>
      </header>
    </div>
  );
}

export default Header;
