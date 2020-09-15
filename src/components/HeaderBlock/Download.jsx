import React from 'react';

import appStore from '../../assets/download/app-store.svg';
import googlePlay from '../../assets/download/google-play.svg';

function Download() {
  return (
    <div className="download">
      <span className="download__title">Download mobile app</span>
      <div className="download__list">
        <a href="/" className="download__link">
          <img src={appStore} alt="App Store" className="download__image" />
        </a>
        <a href="/" className="download__link">
          <img src={googlePlay} alt="Google Play" className="download__image" />
        </a>
      </div>
    </div>
  );
}

export default Download;
