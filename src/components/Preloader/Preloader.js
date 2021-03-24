function Preloader({visible}) {
  return (
    <div>
    {visible ? (
            <section className="preloader">
            <i className="preloader__circle"></i>
            <h3 className="preloader__text">Searching for news...</h3>
          </section>
    ) : (
            <div>
            </div>
        )}
</div>

  );
}

export default Preloader;