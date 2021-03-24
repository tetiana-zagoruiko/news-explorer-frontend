import React from 'react';
import { Link } from 'react-router-dom';

function MobilePopup({ isOpen, onClose, onSignOut, loggedIn, onClickSignin, closeMobilePopup }) {

  if (isOpen && loggedIn) {
    return (
      <div className={`mobile-popup mobile-popup_opened`}>
        <div className="mobile-popup__content">
          <div className="mobile-popup__header">
            <h1 className={`mobile-popup__text `}>NewsExplorer</h1>
            <button className="mobile-popup__close" onClick={onClose}></button>
          </div>
          <div className="mobile-popup__main">
            <Link to="/" className={`mobile-popup__link`} onClick={onClose}>Home</Link>
            <Link to="/saved-news" className={`mobile-popup__link`} onClick={onClose}>Saved articles</Link>
            <button className={`mobile-popup__button `} onClick={onSignOut}>Sign out</button>
          </div>
        </div>
      </div>
    )
  }
  if (isOpen && !loggedIn) {
    return (
      <div className={`mobile-popup mobile-popup_opened`}>
        <div className="mobile-popup__content">
          <div className="mobile-popup__header">
            <h1 className={`mobile-popup__text `}>NewsExplorer</h1>
            <button className="mobile-popup__close" onClick={onClose}></button>
          </div>
          <div className="mobile-popup__main">
            <Link to="/" className={`mobile-popup__link`} onClick={onClose}>Home</Link>
            <Link to="/signin"><button className={`mobile-popup__button `} onClick={closeMobilePopup}>Sign in</button></Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div></div>
  )
}
export default MobilePopup;