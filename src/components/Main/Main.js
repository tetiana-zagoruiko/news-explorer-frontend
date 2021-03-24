import React from 'react';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.js';
import SavedNewsMain from '../SavedNewsMain/SavedNewsMain.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function Main({ openPopup, onSignOut, name, openMobilePopup}) {

  const currentUser = React.useContext(CurrentUserContext);

  if (Object.keys(currentUser).length===0) {
    return (
        <section className="cover">
          <Header openPopup={openPopup} openMobilePopup={openMobilePopup} />
          <SearchForm />
        </section>
    );
  } else if (name) {
    return (
        <section className={`cover cover${name}`}>
          <SavedNewsHeader onSignOut={onSignOut} name={name} openMobilePopup={openMobilePopup} />
          <SavedNewsMain />
        </section>
    );
  } else {
    return (
        <section className="cover">
          <SavedNewsHeader onSignOut={onSignOut} openMobilePopup={openMobilePopup}/>
          <SearchForm />
        </section>
    );
  };

}

export default Main;