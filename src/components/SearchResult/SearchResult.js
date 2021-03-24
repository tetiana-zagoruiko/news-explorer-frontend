import React from 'react';
import SearchArticle from '../SearchArticle/SearchArticle.js';

function SearchResult({articles, number, loggedIn, deleteArticle, likeArticle}) {
  const [visibleArticles, setVisibleArticles] = React.useState(articles.slice(0, number));
  let showButtonName = "";
  if (articles.length===visibleArticles.length) {
    showButtonName = "search-news__button_invisible";
  }
  const buttonState = (
    `${articles.length===visibleArticles.length ? "search-news__button_invisible" : "search-news__button"}`
  );

  function handleShowMore() {
    if (visibleArticles.length< articles.length){
      setVisibleArticles(articles.slice(0, visibleArticles.length+3));
    } 
  }

  return (
    <div>
    {articles.length > 0 ? (
        <section className="search-news">
        <h2 className="search-news__paragraph">Search results</h2>
        <ul className="news__container">
        {visibleArticles.map((article, index) =>
            <SearchArticle
              key={index}
              index={index}
              article={article}
              loggedIn={loggedIn}
              deleteArticle={deleteArticle} 
              likeArticle={likeArticle} 
            />)
          }
        </ul>
        <button className={buttonState} onClick={handleShowMore}>Show more</button>
      </section>
    ) : (
            <div>
            </div>
        )}
    </div>
      
  );

}

export default SearchResult;