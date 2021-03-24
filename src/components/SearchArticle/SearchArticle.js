import React from 'react';
import { Link } from 'react-router-dom';

function SearchArticle({article, loggedIn, index, deleteArticle, likeArticle}) {

  const buttonColor = (
    `${article.articleID ? "news__add news__add_active" : "news__add news__add_liked"}`
  );

  const monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];

  function changeDateFormat(date) {
    const month = monthNames[parseInt(date.slice(5,7))-1];
    const year = date.slice(0,4);
    const day = parseInt(date.slice(8,10));
    return `${month} ${day}, ${year}`
  }
  
  function handleClick() {
    if (article.articleID) {
      deleteArticle(index, article.articleID);
    } else {
      likeArticle(index, article);
    }
  }

  return (
    <React.Fragment>
    {loggedIn ? (
              <React.Fragment>
              <li className="news__item">
                <div className="news__image" style={{ backgroundImage: `url(${article.urlToImage})` }}>
                  <div className="news__image-elements">
                    <button className={buttonColor} onClick={handleClick}></button>
                  </div>
                </div>
                <a href={article.url} className="news__link" target="_blank">
                <div className="news__description">
                  <p className="news__date">{changeDateFormat(article.publishedAt)}</p>
                  <h2 className="news__title">{article.title}</h2>
                  <p className="news__text">{article.description}</p>
                  <p className="news__resourse">{article.source.name}</p>
                </div>
                </a>
              </li>
              </React.Fragment> 
    ) : (
      <React.Fragment>
      <li className="news__item">
        <div className="news__image" style={{ backgroundImage: `url(${article.urlToImage})` }}>
          <div className="news__image-elements">
            <Link to="/signin"><button className="news__add">
              <div className="news__add-text-area">
                <p className="news__add-text">Sign in to save articles</p>
              </div>
            </button></Link>
          </div>
        </div>
        <a href={article.url} className="news__link" target="_blank">
        <div className="news__description">
          <p className="news__date">{changeDateFormat(article.publishedAt)}</p>
          <h2 className="news__title">{article.title}</h2>
          <p className="news__text">{article.description}</p>
          <p className="news__resourse">{article.source.name}</p>
        </div>
        </a>
      </li>
      </React.Fragment>  
        )}
    </React.Fragment>    
  );

}

export default SearchArticle;
