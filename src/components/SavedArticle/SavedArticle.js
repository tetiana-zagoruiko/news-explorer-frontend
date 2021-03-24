import React from 'react';
import { Link } from 'react-router-dom';

function SavedArticle({article, handleArticleDelete}) {
  const monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];

  function changeDateFormat(date) {
    const month = monthNames[parseInt(date.slice(5,7))-1];
    const year = date.slice(0,4);
    const day = parseInt(date.slice(8,10));
    return `${month} ${day}, ${year}`
  }

  function handleDelete() {
    handleArticleDelete(article._id);
  }

  return (
      <React.Fragment>
          <li className="news__item">
            <div className="news__image" style={{ backgroundImage: `url(${article.image})` }}>
              <div className="news__image-elements" >
                <div className="news__keyword-area"><p className="news__keyword">{article.keyword.replace(/^.{1}/g, article.keyword[0].toUpperCase())}</p></div>
                <button className="news__delete" onClick={handleDelete}><div className="news__remove-text-area"><p className="news__remove-text">Remove from saved</p></div></button>
              </div>
            </div>
          <a href={article.link} className="news__link" target="_blank">
            <div className="news__description">
              <p className="news__date">{changeDateFormat(article.date)}</p>
              <h2 className="news__title">{article.title}</h2>
              <p className="news__text">{article.text}</p>
              <p className="news__resourse">{article.source}</p>
            </div>
          </a>
          </li>
        
    </React.Fragment>    
  );

}

export default SavedArticle;
