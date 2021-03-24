import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { Link } from 'react-router-dom';

function SignupPopup({ isOpen, onClose, submitSignup, errorName }) {
  const [errorMail, setErrorMail] = React.useState('');
  const [buttonClassName, setButtonClassName] = React.useState('');
  const email = React.useRef("");
  const password = React.useRef("");
  const name = React.useRef("");

  function validateEmail(mail) {
    const regex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return regex.test(String(mail).toLowerCase());
  }

  function handleChangeEmail() {
    if (validateEmail(email.current.value)) {
      setErrorMail("");
      if (password.current.value && name.current.value.length >= 2) {
        setButtonClassName("form__save-enables");
      }
    } else {
      setErrorMail("Invalid email address");
      setButtonClassName("");
    }
  }

  function handleChangePassword() {
    if (!password.current.value) {
      setButtonClassName("");
    } else {
      if (name.current.value.length >= 2 && validateEmail(email.current.value)) {
        setButtonClassName("form__save-enables");
      }
    }
  }

  function handleChangeName() {
    if (!name.current.value || name.current.value.length < 2) {
      setButtonClassName("");
    } else {
      if (password.current.value && validateEmail(email.current.value)) {
        setButtonClassName("form__save-enables");
      }
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.current.value || !password.current.value || !name.current.value) {
      return;
    }
    console.log(password.current.value, email.current.value, name.current.value);
    submitSignup(password.current.value, email.current.value, name.current.value);
  }

  return (
      <PopupWithForm
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
        children={
          <React.Fragment>
            <h2 className='popup__name'>Sign up</h2>
            <form action="#" className="form_auth" onSubmit={handleSubmit}>
              <h3 className='form__input-text'>Email</h3>
              <input ref={email} className="form__input form__input_auth" placeholder="Enter email" required id="email" name="email" type="email" 
                onChange={e => handleChangeEmail()}/>
              <span className="form__error">{errorMail}<div>&nbsp;</div></span>
              <h3 className='form__input-text'>Password</h3>
              <input ref={password} className="form__input form__input_auth" placeholder="Enter password" required id="password" name="password" type="password" 
                onChange={e => handleChangePassword()}/>
              <span className="form__error"><div>&nbsp;</div></span>
              <h3 className='form__input-text'>Username</h3>
              <input ref={name} className="form__input form__input_auth" placeholder="Enter your username" required id="name" name="name" type="name" 
                onChange={e => handleChangeName()}/>
              <span className="form__error-name">{errorName}<div>&nbsp;</div></span>
              <button type="submit" className={`form__save form__save_auth ${buttonClassName}`}>Sign up</button>
            </form>
            <h3 className='popup__text'>or <Link to="/signin" className="popup__link">Sign in</Link></h3>
          </React.Fragment>}
      />
  );
}

export default SignupPopup;