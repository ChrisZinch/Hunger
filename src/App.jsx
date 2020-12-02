import React, { useState } from 'react';
import ClassNames from 'classnames';
import Timer from 'react-compound-timer';
import logo from './images/logo.svg';
import inst from './images/inst.svg';
import twitter from './images/tw.svg';
import fb from './images/fb.svg';
import Menu from './components/Menu/Menu';
import './App.scss';
import SimpleSlider from './components/Slider/Slider';

function App() {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const handleChangeVisible = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <>
    <div className="container">
      <header className="header">
        <button
          type="button"
          className={ClassNames(
            'header__menuBtn',
            { 'header__menuBtn--active': visibleMenu },
          )}
          onClick={handleChangeVisible}
        >
          <span />
        </button>
        <nav
          className={
            ClassNames(
              'header__nav',
              'nav',
              { 'nav--active': visibleMenu },
            )
          }
        >
          <ul className="nav__list--left nav__list">
            <li className="nav__item hover-underline">
              <a href='#home' className="nav__link">Home</a>
            </li>
            <li className="nav__item hover-underline">
              <a href='#about' className="nav__link">About</a>
            </li>
            <li className="nav__item hover-underline">
              <a href='#team' className="nav__link">Team</a>
            </li>
            <li className="nav__item hover-underline">
              <a href='#booking' className="nav__link">Booking</a>
            </li>
          </ul>
          <img
            src={logo}
            alt="logo"
            className="header__logo"
          />
          <ul className="nav__list--right nav__list">
            <li className="nav__item hover-underline">
              <a href='#menu' className="nav__link">Menu</a>
            </li>
            <li className="nav__item hover-underline">
              <a href='#galerie' className="nav__link">Galerie</a>
            </li>
            <li className="nav__item hover-underline">
              <a href='#events' className="nav__link">Events</a>
            </li>
            <li className="nav__item hover-underline">
              <a href='#contact' className="nav__link">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="timer header__timer">
          <Timer
            initialTime={900000}
            direction="backward"
          >
            {() => (
              <React.Fragment>
                <span>
                  Left: <Timer.Minutes />:<Timer.Seconds />
                </span>
              </React.Fragment>
            )}
          </Timer>
        </div>
        <div className="header__content">
          <p className="header__paragraph">Restaurant</p>
          <h1 className="header__title title">Hungry People</h1>
          <span className="header__decor decor"></span>
          <div className="header__buttons">
            <button
              type="button"
              className="header__button"
            >
              Book table
            </button>
            <button
              type="button"
              className="header__button"
            >
              Explore
            </button>
          </div>
          <div className="header__round header__round--btn">
              <button
                type="button"
                className="round__button"
              />
          </div>
        </div>
        <div className="header__left">
          <p>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
        </div>
        <div className="header__right">
          <div className="header__round">
            <a className="header__media" href="https://www.facebook.com">
              <img
                alt="instagram"
                src={fb}
              />
            </a>
          </div>
          <div className="header__round">
            <a className="header__media" href="https://twitter.com">
            <img
                alt="instagram"
                src={twitter}
              />
            </a>
          </div>
          <div className="header__round">
            <a className="header__media" href="https://www.instagram.com">
              <img
                alt="instagram"
                src={inst}
              />
            </a>
          </div>
        </div>
      </header>
    </div>
      <body>
        <section className="part">
          <div className="booking" id="booking">
            <div className="booking__left">
              <h2 className="booking__title">Book a table</h2>
              <span className="booking__decor decor"></span>
              <form
                className="booking__form"
                action="https://formspree.io/f/xoqpldjp"
                method="POST"
              >
                <input
                  type="text"
                  className="form__item"
                  autoComplete="off"
                  maxLength="15"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  class="form__item"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  pattern="+[0-9\+]{13}"
                  maxlength="13"
                  class="form__item"
                  placeholder="Phone"
                  required
                />
                <select className="booking__select form__item">
                  <option value="0">People</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <input
                  type="date"
                  class="form__item"
                  min="2020-11-24"
                  placeholder="Date"
                  required
                />
                <input
                  type="time"
                  class="form__item"
                  min="09:00"
                  max="23:00"
                  required
                />
                <button
                  className="booking__button"
                  type="submit"
                >
                  Book now
                </button>
              </form>
            </div>
            <div className="booking__right">
            </div>
          </div>
          <div className="booking__paragraph">
            <p className="booking__paragraph--text">Mon - Fri: <strong>8PM - 10PM,</strong> Sat - Sun: <strong>8PM - 3AM,</strong> Phone: <strong>+40 729 131 637/+40 726 458 782</strong></p>
          </div>
        </section>
        <section className="specialties" id="galerie">
          <div className="specialties__name specialties__name--galerie">
            <h3 className="specialties__name--title">Specialties</h3>
          </div>
          <SimpleSlider />
        </section>
        <section className="menu" id="menu">
          <h2 className="menu__title">Delicious menu</h2>
          <span className="menu__decor decor"></span>
          <p className="menu__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
          <Menu />
        </section>
        <section className="specialties" id="events">
          <div className="specialties__name">
            <h3 className="specialties__name--title">Private events</h3>
          </div>
          <div className="specialties__content">
            <div className="specialties__content--left">
              <div className="left__description">
                <h2 className="left__description--title">Weddings</h2>
              </div>
            </div>
            <div className="specialties__content--right">
            <div className="right__description">
                <h2 className="right__description--title">Corporate pzrties</h2>
              </div>
            </div>
          </div>
          <div className="specialties__bottom">
            <p className="specialties__bottom--text">For private events please call: +40 729 131 637/+40 726 458 782 or use the contact form.</p>
          </div>
        </section>
      </body>
</>
  );
}

export default App;
