function SearchForm() {
  return (
      <div className="search">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__text">Find the latest news on any topic and save them in your personal account.</p>
        <form className="search__form">
        <input type="text" placeholder="Enter topic" name="search" className="search__input"></input>
          <button type="submit" className="search__button">Search</button>
        </form>
      </div>
  );
}

export default SearchForm;