import React, { useState } from 'react';
import dishes from '../../api/dishes.json';
import position from '../../api/position.json';
import './menuList.scss';


const Menu = () => {
  const [currentId, setCurrentId] = useState(1);
  const preparedDishes = dishes.filter(item => item.posId === currentId);

  return (
    <>
    <div className="menu__wrapper">
      <nav className="menu__position">
        <ul className="menu__list">
          {position.map(item => (
            <li className="menu__list--item" key={item.id}>
              <button
                type="button"
                onClick={() => {
                  setCurrentId(item.id);
                }}
                className="menu__toggle"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="menu__table">
        {preparedDishes.map(val => (
          <li className="menu__table--item" key={val.id}>
            {val.content} ....
            <span className="price"> {val.price}</span>
            <p className="description">Integer ullamcorper neque eu purus euismod</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Menu;