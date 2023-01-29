import React, {useState} from 'react';

const Tabs = (props) => {
  const {controls, content} = props
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => setActiveIndex(index)

  const checkActive = (index) => activeIndex === index ? 'active' : ''

  return (
    <div className="tabs">
      <div className="tabs__control">
        {controls.map((item, index) =>
          <button
            className={`tabs__control-item ${checkActive(index)}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            {item}
          </button>
        )}
      </div>
      {content.map((item, index) =>
        <div className={`tabs__content ${checkActive(index)}`} key={index}>
          <div className="services__item">
            <ul className="services__list">
              {item.map(item =>
                <li className='services__list-item' key={item.title}>
                  <span className='services__list-name'>{item.title}</span>
                  <span className='services__list-price'>{item.price} &#8381;</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabs;