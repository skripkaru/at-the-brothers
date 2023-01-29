import React from 'react';
import Tabs from "@/components/Tabs";

const Services = () => {
  const controls = [
    'Голова',
    'Борода',
    'Окрашивание',
    'Разное',
  ]

  const content = [
    [
      {
        title: 'Мужская стрижка',
        price: '1300',
      },
      {
        title: 'Стрижка машинкой (2 насадки)',
        price: '700',
      },
      {
        title: 'Стрижка на ножницах',
        price: '1600',
      },
      {
        title: 'Бритье головы',
        price: '1300',
      },
      {
        title: 'Детская стрижка (5-11 лет)',
        price: '900',
      },
    ],
    [
      {
        title: 'Моделирование бороды',
        price: '1000',
      },
      {
        title: 'Стрижка бороды',
        price: '700',
      },
      {
        title: 'Бритье лица',
        price: '1300',
      },
    ],
    [
      {
        title: 'Тонирование бороды',
        price: '800',
      },
      {
        title: 'Тонирование головы',
        price: '1100',
      },
      {
        title: 'Сложное окрашивание',
        price: '3000-10000',
      },
    ],
    [
      {
        title: 'Восковое удаление волос',
        price: '300',
      },
      {
        title: 'Укладка волос',
        price: '400',
      },
      {
        title: 'Окантовка',
        price: '400',
      },
      {
        title: 'Hair tatoo',
        price: '300',
      }
    ],
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="services__inner">
          <div className="services__content">
            <h2 className="title">
              Услуги
              <span>.</span>
            </h2>
            <Tabs controls={controls} content={content}/>
          </div>
          <div className="services__img">
            <img src='/images/services.jpg' alt='Услуги'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;