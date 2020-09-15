import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from '../../routes';

function Menu({ closeMenu = (f) => f }) {
  return (
    <ul className="header-menu__list">
      {routes.map((route) => (
        <Fragment key={route.id}>
          {route.name && (
            <li className="header-menu__item">
              <NavLink
                to={route.path}
                className="link header-menu__link"
                activeClassName="active"
                exact
                onClick={closeMenu}
              >
                {route.name}
              </NavLink>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
}

export default Menu;
