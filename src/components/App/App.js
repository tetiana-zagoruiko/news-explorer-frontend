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
import * as mainApi from '../../utils/MainApi.js';
import * as newsApi from '../../utils/NewsApi.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import MobilePopup from '../MobilePopup/MobilePopup.js';


function App() {
  const [isSigninPopupOpen, setSigninPopupOpen] = React.useState(true);
  const [isSignupPopupOpen, setSignupPopupOpen] = React.useState(true);
  const [isSuccRegPopupOpen, setSuccRegPopupOpen] = React.useState(false);
  const [isMobilePopupOpen, setMobilePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [notFoundView, setNotFoundView] = React.useState(false);
  const [notFoundText, setNotFoundText] = React.useState(`Sorry, but nothing matched\nyour search terms.`);
  const [spinnerView, setSpinnerView] = React.useState(false);
  const [userArticles, setUserArticles] = React.useState([]);
  const [searchArticles, setSearchArticles] = React.useState(JSON.parse(localStorage.getItem("articles")));
  const [viewSearch, setViewSearch] = React.useState(true);
  const [errorName, setErrorName] = React.useState("");
  const [number, setNumber] = React.useState(3);
  const history = useHistory();

  function getUserArticles() {
    mainApi.getAllArticles()
    .then(res => {
      setUserArticles(res);
    })
    .catch(err => console.log(err));
  }
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          history.push("/");
        })
        .catch(err => console.log(err));
      mainApi.getUserInfo()
        .then(res => {
          setCurrentUser(res.data);
        })
        .catch(err => console.log(err));
      getUserArticles();
    }
  }, [loggedIn, history, searchArticles]);

  function handleArticleDelete(articleID) {
    mainApi.deleteArticle(articleID)
    .then(res => {
      getUserArticles();
    })
    .catch(err => console.log(err));
  }

  function handleSearch(keyword) {
    setViewSearch(false);
    setSpinnerView(true);
    newsApi.getSearchArticles(keyword)
    .then(res => {
      if (res.articles.length === 0) {
        localStorage.removeItem('articles');
        setSpinnerView(false);
        setNotFoundText(`Sorry, but nothing matched\nyour search terms.`);
        setNotFoundView(true);
      } else if (!res) {
        setSpinnerView(false);
        setNotFoundText(`Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.`);
        setNotFoundView(true);
      } else {
        localStorage.setItem("articles", JSON.stringify(res.articles));
        localStorage.setItem("keyword", keyword);
        setSpinnerView(false);
        const newArticles = localStorage.getItem("articles");
        setSearchArticles(JSON.parse(newArticles));
        setViewSearch(true);
      }
    })
    .catch(err => {
      setSpinnerView(false);
      setNotFoundText(`Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.`);
      setNotFoundView(true);
    });
  }

  const onSignOut = () => {
    setMobilePopupOpen(false);
    localStorage.removeItem('jwt');
    setCurrentUser({});
    setLoggedIn(false);
    setMobilePopupOpen(false);
    history.push("/");
  }
function closePopups() {
  history.push("/");
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
        if (res.message =="Email already exists in the database") {
          setErrorName("This email is not available");
          return;
        };
        if (!res || res.statusCode === 400 || res.statusCode === 500 || res.message === "An error occurred on the server" || res.statusCode === 409) {
          return;
        } else {
          history.push("/");
          setSuccRegPopupOpen(true);
        }
      })
      .catch(err => console.log(err))
  }

  function handleLogin(password, email) {
    auth.authorize(password, email)
      .then((data) => {
        if (data.data) {
          localStorage.setItem("jwt", data.data);
          setLoggedIn(true);
          history.push("/");
        }
      })
      .catch(err => console.log(err))
    }

  function onClickSignup() {
    setSignupPopupOpen(true);
  }

  function onClickSignin() {
    setMobilePopupOpen(false);
    setSuccRegPopupOpen(false);
    setSigninPopupOpen(true);
  }

  function openRegSucc() {
    setSuccRegPopupOpen(true);
  }

  function closeRegSucc() {
    setSuccRegPopupOpen(false);
  }

  function openMobilePopup() {
    setMobilePopupOpen(true);
  }

  function closeMobilePopup() {
    setMobilePopupOpen(false);
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

function likeArticle(index, article) {
  mainApi.postArticle(article)
    .then(res => {
      const updatedArticle = searchArticles[index];
      updatedArticle.articleID = res._id;
      searchArticles[index]=updatedArticle;
      setSearchArticles(searchArticles);
      getUserArticles();
    })
    .catch(err => console.log(err));
}

function deleteArticle(index, articleID) {
  handleArticleDelete(articleID);
  const updatedArticle = searchArticles[index];
  delete updatedArticle["articleID"]; 
  searchArticles[index]=updatedArticle;
  setSearchArticles(searchArticles);
  getUserArticles();
}

return (
  <CurrentUserContext.Provider value={currentUser}>
  <div className="page">
      <Switch>
      <Route exact path="/">
          <Main handleSearch={handleSearch} openPopup={openSigninPopup} onSignOut={onSignOut} openMobilePopup={openMobilePopup}/>
          <Preloader visible={spinnerView} />
          {searchArticles&&searchArticles !== null&&viewSearch? ( <SearchResult number={number} articles={searchArticles} loggedIn={loggedIn} deleteArticle={deleteArticle} likeArticle={likeArticle} />) : (
            <div>
            </div>
        )}
          <NotFound visible={notFoundView} notFoundText={notFoundText}/>
          <About />
          <Footer />
      </Route>
      <Route path="/signin">
        <Main openPopup={openSigninPopup} onSignOut={onSignOut} openMobilePopup={openMobilePopup}/>
        <About />
        <Footer />
        <SigninPopup isOpen={isSigninPopupOpen} onClose={closePopups} submitSignin={handleLogin} onClickSignup={onClickSignup} />
      </Route>
      <Route path="/signup">
        <Main openPopup={openSigninPopup} onSignOut={onSignOut} openMobilePopup={openMobilePopup}/>
        <About />
        <Footer />
        <SignupPopup isOpen={isSignupPopupOpen} errorName={errorName} onClose={closePopups} submitSignup={handleRegister} onClickSignin={onClickSignin} openRegSucc={openRegSucc}/>
      </Route>
      <Route path="/saved-news">
        <ProtectedRoute loggedIn={loggedIn} component={Main} articles={userArticles} openPopup={openSigninPopup} onSignOut={onSignOut} openMobilePopup={openMobilePopup} name="_saved-news" />
        <ProtectedRoute loggedIn={loggedIn} articles={userArticles} handleArticleDelete={handleArticleDelete} component={SavedNews} />
        <ProtectedRoute loggedIn={loggedIn} component={Footer} />
      </Route>
      </Switch>
    <SuccRegPopup isOpen={isSuccRegPopupOpen} onClose={closePopups} closeRegSucc={closeRegSucc}/>
    <MobilePopup isOpen={isMobilePopupOpen} onClickSignin={onClickSignin} onSignOut={onSignOut} onClose={closePopups} closeMobilePopup={closeMobilePopup} loggedIn={loggedIn}/>
  </div>
  </CurrentUserContext.Provider>
);

}

export default App;
