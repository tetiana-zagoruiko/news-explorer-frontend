import React, { useRef } from 'react';

function SearchForm({handleSearch}) {
  const searchKeyword = React.useRef("");
  const [placeholder, setPlaceholder] = React.useState("Enter topic");

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchKeyword.current.value) {
      setPlaceholder("Please enter a keyword");
    } else {
      handleSearch(searchKeyword.current.value);
    }
  }

  return (
      <div className="search">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__text">Find the latest news on any topic and save them in your personal account.</p>
        <form className="search__form" onSubmit={handleSubmit}>
        <input ref={searchKeyword} type="text" placeholder={placeholder} name="search" className="search__input"></input>
          <button type="submit" className="search__button">Search</button>
        </form>
      </div>
  );
}

export default SearchForm;