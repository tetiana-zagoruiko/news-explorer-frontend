import React from 'react';

function SearchResult() {

  return (
    <div>
      <section className="search-news">
        <h2 className="search-news__paragraph">Search results</h2>
        <ul className="news__container">
          <li className="news__item">
            <div className="news__image">
              <div className="news__image-elements">
                <button className="news__add">
                  <div className="news__add-text-area">
                    <p className="news__add-text">Sign in to save articles</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="news__description">
              <p className="news__date">November 4, 2020</p>
              <h2 className="news__title">Everyone Needs a Special 'Sit Spot' in Nature</h2>
              <p className="news__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find.</p>
              <p className="news__resourse">treehugger</p>
            </div>
          </li>
          <li className="news__item">
            <div className="news__image">
              <div className="news__image-elements">
                <button className="news__add">
                  <div className="news__add-text-area">
                    <p className="news__add-text">Sign in to save articles</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="news__description">
              <p className="news__date">November 4, 2020</p>
              <h2 className="news__title">Everyone Needs a Special 'Sit Spot' in Nature</h2>
              <p className="news__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find.</p>
              <p className="news__resourse">treehugger</p>
            </div>
          </li>
          <li className="news__item">
            <div className="news__image">
              <div className="news__image-elements">
                <button className="news__add">
                  <div className="news__add-text-area">
                    <p className="news__add-text">Sign in to save articles</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="news__description">
              <p className="news__date">November 4, 2020</p>
              <h2 className="news__title">Everyone Needs a Special 'Sit Spot' in Nature</h2>
              <p className="news__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find.</p>
              <p className="news__resourse">treehugger</p>
            </div>
          </li>
        </ul>
        <button className="search-news__button">Show more</button>
      </section>
    </div>
  );

}

export default SearchResult;