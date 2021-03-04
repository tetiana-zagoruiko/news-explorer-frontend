import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { Link } from 'react-router-dom';

function SigninPopup({ isOpen, onClose, submitSignin, onClickSignup }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMail, setErrorMail] = React.useState('');
  var submitButtonDisabled = false;
  var buttonClassName = ""


  function validateEmail(mail) {
    console.log("here");
    const regex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return regex.test(String(mail).toLowerCase());
  }

  function handleChangeEmail(newEmail) {
    setEmail(newEmail);
    console.log("this is current", email);
    console.log(validateEmail("val res", email));
    if (validateEmail(email)) {
      console.log("valid");
      setErrorMail("");
    } else {
      console.log("invalid");
      setErrorMail("Invalid email address");
      submitButtonDisabled = true;
      buttonClassName = ""
    }
  }

  function handleChangePassword(newPassword) {
    setPassword(newPassword);
    if (!password) {
      submitButtonDisabled = true;
      buttonClassName = ""
    }
  }

  if (password !== "" && validateEmail(email)) {
    submitButtonDisabled = false;
    buttonClassName = "form__save-enables";
  }


  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    submitSignin(password, email);
    resetForm();
  }

  return (
      <div>
        {isOpen ? (
          <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            handleSubmit={handleSubmit}
            children={
              <React.Fragment>
                <h2 className='popup__name'>Sign in</h2>
                <form action="#" className="form_auth" onSubmit={handleSubmit}>
                  <h3 className='form__input-text'>Email</h3>
                  <input className="form__input form__input_auth" placeholder="Enter email" required id="email" name="email" type="email" 
                  onChange={e => handleChangeEmail(e.target.value)}/>
                  <span className="form__error">{errorMail}<div>&nbsp;</div></span>
                  <h3 className='form__input-text'>Password</h3>
                  <input className="form__input form__input_auth" placeholder="Enter password" required id="password" name="password" type="password" 
                    onChange={e => handleChangePassword(e.target.value)}/>
                  <span className="form__error"><div>&nbsp;</div></span>
                  <button type="submit" disabled={submitButtonDisabled} className={`form__save form__save_auth ${buttonClassName}`}>Sign in</button>
                </form>
                <h3 className='popup__text'>or <a className="popup__link" onClick={onClickSignup}>Sign up</a></h3>
              </React.Fragment>}
          />
        ) : (
            <div>
            </div>
          )}
      </div>
  );
}
export default SigninPopup;