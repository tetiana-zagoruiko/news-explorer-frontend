import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function SuccRegPopup({ isOpen, onClose, onClickSignin }) {

  return (
      <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        name="succ-reg"
        children={
          <React.Fragment>
            <h2 className='popup__name'>Registration successfully completed!</h2>
            <a className="popup__succ-link" onClick={onClickSignin}>Sign in</a>
          </React.Fragment>}
      />
  );
}

export default SuccRegPopup;