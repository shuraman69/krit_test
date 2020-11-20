import React from 'react';
import { Link } from 'react-router-dom';

import { root } from '../../routes';
import {
  Menu, Contacts, Download, Logo,
} from './index';

function Header() {
  const [visible, setVisible] = React.useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <header className={visible ? 'header hidden' : 'header'}>
      <div className="header__container container">
        <Link to={root} className="header__logo logo">
          <Logo />
        </Link>
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
      <nav className={visible ? 'header-menu visible' : 'header-menu'}>
        <div className="header-menu__container container">
          <button className="header-menu__button" onClick={toggleMenu}>
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
          <Menu closeMenu={closeMenu} />
          <div className="header-menu__bottom">
            <Contacts />
            <div className="header-menu__contains">
              <Download closeMenu={closeMenu} />
              <Link to={root} onClick={closeMenu} className="header-menu__logo logo logo--gray">
                <Logo />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
