import notFoundImage from "../../images/not-found.svg";

function NotFound({visible, notFoundText}) {

  return (
    <div>
    {visible ? (
        <section className="notfound">
        <img src={notFoundImage} alt="nothing found" className="notfound__image" />
        <h2 className="notfound__title">Nothing found</h2>
        <p className="notfound__text">{notFoundText}</p>
      </section>
    ) : (
            <div>
            </div>
        )}
    </div>
  );
}

export default NotFound;