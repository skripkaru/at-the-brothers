import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <h1 className='title title--light'>
              Стрижем и бреем
              <span>.</span>
            </h1>
            <p className='hero__text'>Продумаем до мелочей и создадим стильный выдержанный образ, который подчеркнет
              твою мужественность.</p>
            <a className='btn' href='https://n400714.yclients.com/' target='_blank' rel="noreferrer">Записаться</a>
          </div>
          <div className="hero__img">
            <img src='/images/hero.jpg' alt="У братьев"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;