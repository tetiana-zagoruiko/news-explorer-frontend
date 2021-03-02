import React from 'react';

function Footer() {

  return (
    <div>
      <section className="footer">
        <p className="footer__text">&copy; 2020 Supersite, Powered by News API</p>
        <div className="footer__links">
          <a href="/" className="footer__link-home">Home</a>
          <a href="https://practicum.yandex.com" target="_blank" className="footer__link-yandex">Practicum by Yandex</a>
        </div>
        <div className="footer__buttons">
          <a href='https://github.com/tetiana-zagoruiko' target="_blank"><button className="footer__button-git"></button></a>
          <a href='https://m.facebook.com/yandex.praktikum/' target="_blank"><button className="footer__button-facebook"></button></a>
        </div>
      </section>
    </div>
  );
}

export default Footer;