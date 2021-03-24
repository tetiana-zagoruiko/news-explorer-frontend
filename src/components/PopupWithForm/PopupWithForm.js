import React from 'react';

function PopupWithForm({ isOpen, onClose, children }) {
  return (
    <div>
      {isOpen ? (
        <div className={`popup popup_opened`}>
          <div className="popup__content">
            {children}
          <button className="popup__close" onClick={onClose}></button>
          </div>
        </div>
      ) : (
          <div>
          </div>
        )}
    </div>
  );
}

export default PopupWithForm;