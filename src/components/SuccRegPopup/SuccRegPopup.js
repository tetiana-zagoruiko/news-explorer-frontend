import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { Link } from 'react-router-dom';

function SuccRegPopup({ isOpen, onClose, closeRegSucc }) {

  return (
      <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="succ-reg"
        children={
          <React.Fragment>
            <h2 className='popup__name'>Registration successfully completed!</h2>
            <Link to="/signin" className="popup__succ-link" onClick={closeRegSucc}>Sign in</Link>
          </React.Fragment>}
      />
  );
}

export default SuccRegPopup;