import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import About from '../About/About.js';
import Main from '../Main/Main.js';
import NotFound from '../NotFound/NotFound.js';
import SavedNews from '../SavedNews/SavedNews.js';
import SearchResult from '../SearchResult/SearchResult.js';
import Preloader from '../Preloader/Preloader.js';
import Footer from '../Footer/Footer.js';
import SigninPopup from '../SigninPopup/SigninPopup.js';
import SignupPopup from '../SignupPopup/SignupPopup.js';
import SuccRegPopup from '../SuccRegPopup/SuccRegPopup.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import * as auth from '../../auth.js';
import api from '../../utils/Api.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import MobilePopup from '../MobilePopup/MobilePopup.js';


function App() {
  const [isSigninPopupOpen, setSigninPopupOpen] = React.useState(false);
  const [isSignupPopupOpen, setSignupPopupOpen] = React.useState(false);
  const [isSuccRegPopupOpen, setSuccRegPopupOpen] = React.useState(false);
  const [isMobilePopupOpen, setMobilePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [errorName, setErrorName] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          history.push("/");
        })
        .catch(err => console.log(err));
      api.getUserInfo()
        .then(res => {
          setCurrentUser(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [loggedIn, history]);

  const onSignOut = () => {
    setMobilePopupOpen(false);
    localStorage.removeItem('jwt');
    console.log(localStorage);
    setCurrentUser({});
    setLoggedIn(false);
    setMobilePopupOpen(false);
    history.push("/");
  }
function closePopups() {
  setSigninPopupOpen(false);
  setSignupPopupOpen(false);
  setSuccRegPopupOpen(false);
  setMobilePopupOpen(false);
  setErrorName("");
}

function openSigninPopup() {
  setSigninPopupOpen(true);
}

  function handleRegister(password, email, name) {
    auth.register(password, email, name)
      .then((res) => {
        if (!res || res.statusCode === 400 || res.statusCode === 500 || res.message === "An error occurred on the server" || res.statusCode === 409 || res.message === "Email already exists in the database") {
        } else {
          setSignupPopupOpen(false);
          setSuccRegPopupOpen(true);
          return res;
        }
        if (res.message =="Email already exists in the database") {
          setErrorName("This email is not available");
        };
      })
      .catch(err => console.log(err))
  }

  function handleLogin(password, email) {
    auth.authorize(password, email)
      .then((data) => {
        if (data.data) {
          localStorage.setItem("jwt", data.data);
          setLoggedIn(true);
          setSigninPopupOpen(false);
          history.push("/");
        }
      })
      .catch(err => console.log(err))
    }

  function onClickSignup() {
    setSigninPopupOpen(false);
    setSignupPopupOpen(true);
  }

  function onClickSignin() {
    setMobilePopupOpen(false);
    setSignupPopupOpen(false);
    setSuccRegPopupOpen(false);
    setSigninPopupOpen(true);
  }

  function openRegSucc() {
    setSignupPopupOpen(false);
    setSuccRegPopupOpen(true);
  }

  function openMobilePopup() {
    setMobilePopupOpen(true);
  }
 

document.addEventListener('keydown', event => {
  if ((isSigninPopupOpen || isSignupPopupOpen || isSuccRegPopupOpen) && event.key === 'Escape') {
    closePopups();
  }
}); 

  document.addEventListener('click', event => {
    if ((isSigninPopupOpen || isSignupPopupOpen || isSuccRegPopupOpen) 
    && event.target.classList.value.includes('popup popup_opened')) {
      closePopups();
    }
  }); 

return (
  <CurrentUserContext.Provider value={currentUser}>
  <div className="page">
      <Switch>
      <Route exact path="/">
          <Main openPopup={openSigninPopup} onSignOut={onSignOut} openMobilePopup={openMobilePopup}/>
          <Preloader />
          <SearchResult />
          <NotFound />
          <About />
          <Footer />
      </Route>
      <Route path="/saved-news">
        <Main openPopup={openSigninPopup} onSignOut={onSignOut} openMobilePopup={openMobilePopup} name="_saved-news" />
        <SavedNews />
        <Footer />
      </Route>
      </Switch>
    <SigninPopup isOpen={isSigninPopupOpen} onClose={closePopups} submitSignin={handleLogin} onClickSignup={onClickSignup} />
    <SignupPopup isOpen={isSignupPopupOpen} errorName={errorName} onClose={closePopups} submitSignup={handleRegister} onClickSignin={onClickSignin} openRegSucc={openRegSucc}/>
    <SuccRegPopup isOpen={isSuccRegPopupOpen} onClose={closePopups} onClickSignin={onClickSignin}/>
    <MobilePopup isOpen={isMobilePopupOpen} onClickSignin={onClickSignin} onSignOut={onSignOut} onClose={closePopups} onClickSignin={onClickSignin} loggedIn={loggedIn}/>
  </div>
  </CurrentUserContext.Provider>
);

}

export default App;
