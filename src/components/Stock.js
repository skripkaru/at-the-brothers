import React from 'react';
import {stock} from "@/utils/constants";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from "swiper";
import Card from "@/components/Card";
import 'swiper/css';

const Stock = () => {
  return (
    <section className="stock">
      <div className="container">
        <div className="stock__header">
          <h2 className="title">
            Акции
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
          modules={[Navigation]}
          navigation={{
            prevEl: '.stock .swiper-button-prev',
            nextEl: '.stock .swiper-button-next',
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {stock.map(item =>
            <SwiperSlide key={item.title}>
              <Card {...item}/>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default Stock;