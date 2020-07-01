import React from "react";
import { NavLink } from "react-router-dom";

import { headerRoutes } from "../routes";
import { Logo } from "../elements";

import appStore from "../assets/download/app-store.svg";
import googlePlay from "../assets/download/google-play.svg";

function Header() {
  const [visible, setVisible] = React.useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <header className="header">
      <div className="header__container container">
        <figure className="header__logo logo">
          <Logo />
        </figure>
        <button type="button" className="header__button" onClick={toggleMenu}>
          <svg
            width={20}
            height={5}
            viewBox="0 0 20 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2.71271" cy="2.39142" r="2.08527" fill="#F4F7FF" />
            <circle cx="10.2708" cy="2.39142" r="2.08527" fill="#F4F7FF" />
            <circle cx="17.8289" cy="2.39142" r="2.08527" fill="#F4F7FF" />
          </svg>
        </button>
      </div>
      <nav className={visible ? "headerMenu visible" : "headerMenu"}>
        <div className="headerMenu__container container">
          <button className="headerMenu__button" onClick={toggleMenu}>
            <svg
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6094 13.0625L6.82815 6.88323L12.6094 0.89285"
                stroke="#E7ECFF"
                strokeWidth={2}
              />
              <path
                d="M1.04688 0.892578L6.8281 7.07185L1.04688 13.0622"
                stroke="#E7ECFF"
                strokeWidth={2}
              />
            </svg>
          </button>
          <ul className="headerMenu__list">
            {headerRoutes.map((route) => {
              return (
                <li key={route.id} className="headerMenu__item">
                  <NavLink
                    to={route.path}
                    className="link headerMenu__link"
                    activeClassName="active"
                    exact
                    onClick={closeMenu}
                  >
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="headerMenu__bottom">
            <div className="contacts">
              <span className="contacts__title">Contact us</span>
              <a
                href="mailto:info@scratch.radio"
                className="link link--theme_gray contacts__link"
              >
                info@scratch.radio
              </a>
              <a href="/" className="link link--theme_gray contacts__link">
                facebook
              </a>
            </div>
            <div className="headerMenu__contains">
              <div className="download">
                <span className="download__title">Download mobile app</span>
                <div className="download__list">
                  <a href="/" className="download__link">
                    <img
                      src={appStore}
                      alt="App Store"
                      className="download__image"
                    />
                  </a>
                  <a href="/" className="download__link">
                    <img
                      src={googlePlay}
                      alt="Google Play"
                      className="download__image"
                    />
                  </a>
                </div>
              </div>
              <figure className="headerMenu__logo logo logo--gray">
                <Logo />
              </figure>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
