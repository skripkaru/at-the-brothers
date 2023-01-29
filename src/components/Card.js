import React from 'react';

const Card = (props) => {
  const {img, title, body, price} = props

  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt={title}/>
      </div>
      {title && <h3 className="card__title">{title}</h3>}
      {body && <span className="card__text">{body}</span>}
      {price && <span className="card__price">{price}</span>}
    </div>
  );
};

export default Card;