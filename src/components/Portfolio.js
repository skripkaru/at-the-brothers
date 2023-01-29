import React from 'react';
import {portfolio} from "@/utils/constants";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper";
import 'swiper/css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <h2 className="title">
            Портфолио
            <span>.</span>
          </h2>
          <div className='swiper-navigation'>
            <button className="swiper-button-prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
              </svg>
            </button>
            <button className="swiper-button-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          spaceBetween={2}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            prevEl: '.portfolio .swiper-button-prev',
            nextEl: '.portfolio .swiper-button-next',
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {portfolio.map(item =>
            <SwiperSlide key={item.title}>
              <div className="portfolio__img">
                <img src={item.img} alt={item.title}/>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;