import notFoundImage from "../../images/not-found.svg";

function NotFound() {
  const text = `Sorry, but nothing matched\nyour search terms.`;
  return (
    <div>
      <section className="notfound">
        <img src={notFoundImage} alt="nothing found" className="notfound__image" />
        <h2 className="notfound__title">Nothing found</h2>
        <p className="notfound__text">{text}</p>
      </section>
    </div>
  );
}

export default NotFound;