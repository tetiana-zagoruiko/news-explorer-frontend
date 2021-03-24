import React from 'react';
import SavedArticle from '../SavedArticle/SavedArticle.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function SavedNews({articles, handleArticleDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  articles = articles.filter(article => article.owner == currentUser._id)

  return (
      <section className="news">
        <ul className="news__container">
          {articles.map((article, id) =>
            <SavedArticle
              key={id}
              handleArticleDelete={handleArticleDelete}
              article={article}
            />)
          }
        </ul>
      </section>
  );

}

export default SavedNews;
