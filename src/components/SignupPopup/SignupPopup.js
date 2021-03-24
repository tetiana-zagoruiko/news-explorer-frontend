import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function SignupPopup({ isOpen, onClose, submitSignup, errorName, onClickSignin }) {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [errorEmail, setErrorMail] = React.useState('');
  var submitButtonDisabled = false;
  var buttonClassName = ""


  function validateEmail(mail) {
    console.log("here");
    const regex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return regex.test(String(mail).toLowerCase());
  }

  function handleChangeEmail(newEmail) {
    setEmail(newEmail);
    if (validateEmail(email)) {
      setErrorMail("");
    } else {
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

  function handleChangeName(newName) {
    setName(newName);
    if (!name) {
      submitButtonDisabled = true;
      buttonClassName = ""
    }
  }

  if (password !== "" && validateEmail(email) && name !== "") {
    submitButtonDisabled = false;
    buttonClassName = "form__save-enables";
  }

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      return;
    }
    submitSignup(password, email, name);
    resetForm();
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
              <input className="form__input form__input_auth" placeholder="Enter email" required id="email" name="email" type="email" 
                value={email} onChange={e => handleChangeEmail(e.target.value)}/>
              <span className="form__error">{errorEmail}<div>&nbsp;</div></span>
              <h3 className='form__input-text'>Password</h3>
              <input className="form__input form__input_auth" placeholder="Enter password" required id="password" name="password" type="password" 
                value={password} onChange={e => handleChangePassword(e.target.value)}/>
              <span className="form__error"><div>&nbsp;</div></span>
              <h3 className='form__input-text'>Username</h3>
              <input className="form__input form__input_auth" placeholder="Enter your username" required id="name" name="name" type="name" 
                value={name} onChange={e => handleChangeName(e.target.value)}/>
              <span className="form__error-name">{errorName}<div>&nbsp;</div></span>
              <button type="submit" disabled={submitButtonDisabled} className={`form__save form__save_auth ${buttonClassName}`}>Sign up</button>
            </form>
            <h3 className='popup__text'>or <a className="popup__link" onClick={onClickSignin}>Sign in</a></h3>
          </React.Fragment>}
      />
  );
}

export default SignupPopup;