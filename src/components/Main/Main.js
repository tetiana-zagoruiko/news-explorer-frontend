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
      <div>
        <section className="cover">
          <Header openPopup={openPopup} openMobilePopup={openMobilePopup} />
          <SearchForm />
        </section>
      </div>
    );
  } else if (name) {
    return (
      <div>
        <section className={`cover cover${name}`}>
          <SavedNewsHeader onSignOut={onSignOut} name={name} openMobilePopup={openMobilePopup} />
          <SavedNewsMain />
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section className="cover">
          <SavedNewsHeader onSignOut={onSignOut} openMobilePopup={openMobilePopup}/>
          <SearchForm />
        </section>
      </div>
    );
  };

}

export default Main;