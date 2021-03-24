import React from 'react';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import SavedNewsMain from '../SavedNewsMain/SavedNewsMain.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function Main({ articles, openPopup, onSignOut, name, openMobilePopup, handleSearch}) {

  const currentUser = React.useContext(CurrentUserContext);

  if (Object.keys(currentUser).length===0) {
    return (
        <section className="cover">
          <Header openPopup={openPopup} openMobilePopup={openMobilePopup} />
          <SearchForm handleSearch={handleSearch} />
        </section>
    );
  } else if (name) {
    return (
        <section className={`cover cover${name}`}>
          <SavedNewsHeader  onSignOut={onSignOut} name={name} openMobilePopup={openMobilePopup} />
          <SavedNewsMain articles={articles} />
        </section>
    );
  } else {
    return (
        <section className="cover">
          <SavedNewsHeader onSignOut={onSignOut} openMobilePopup={openMobilePopup}/>
          <SearchForm handleSearch={handleSearch} />
        </section>
    );
  };

}

export default Main;