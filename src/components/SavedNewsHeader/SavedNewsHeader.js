import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import { Link } from 'react-router-dom';

function SavedNewsHeader({ onSignOut, name, openMobilePopup }) {

  const currentUser = React.useContext(CurrentUserContext);
  //articles = articles.filter(article => article.owner == currentUser._id)
  //console.log(articles);

  return (
      <header className={`header-saved header-saved${name}`}>
        <h1 className={`header__text header__text${name}`}>NewsExplorer</h1>
        <Link to="/" className={`header__link header__link${name}`}><button className={`header__button-home header__button-home-saved header__button-home${name}`}>Home</button></Link>
        <Link to="/saved-news" className={`header__link header__link${name}`} ><button className={`header-saved__button-articles header-saved__button-articles${name}`}>Saved articles</button></Link>
        <button className={`header-saved__button-signout header-saved__button-signout${name}`} onClick={onSignOut}><p className={`header-saved__text header-saved__text${name}`}>{currentUser.name}</p><div className={`header-saved__image header-saved__image${name}`}></div></button>
        <button className={`header__button-mobile header-saved__button-mobile${name}`} onClick={openMobilePopup}></button>
      </header>
  );
}

export default SavedNewsHeader;
