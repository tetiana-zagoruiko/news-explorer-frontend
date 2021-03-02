import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function SavedNewsMain() {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div>
      <section className="main-saved">
        <h3 className="main-saved__subtitle">Saved articles</h3>
        <h2 className="main-saved__title">Elise, you have 5 saved articles</h2>
        <p className="main-saved__text">By keywords: <b>Nature, Yellowstone, and 2 other</b></p>
      </section>
    </div>
  );

}

export default SavedNewsMain;