import React from 'react';
import { Link } from 'react-router-dom';

import appStore from '../../assets/download/app-store.svg';
import googlePlay from '../../assets/download/google-play.svg';

function Download({ closeMenu = (f) => f }) {
  return (
    <div className="download">
      <span className="download__title">Download mobile app</span>
      <div className="download__list">
        <Link to="/mobile-app/" className="download__link" onClick={closeMenu}>
          <img src={appStore} alt="App Store" className="download__image" />
        </Link>
        <Link to="/mobile-app/" className="download__link" onClick={closeMenu}>
          <img src={googlePlay} alt="Google Play" className="download__image" />
        </Link>
      </div>
    </div>
  );
}

export default Download;
