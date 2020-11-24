import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="error-page text-center container container--offset_top">
      <h1 className="error-page__title color-gold">404</h1>
      <p className="error-page__desc">Page not found.</p>
      <p className="error-page__text">
        Return to
        {' '}
        <Link to="/" className="link link--theme_gold">
          home page
        </Link>
        {' '}
        or provide another link.
      </p>
    </div>
  );
}

export default NotFound;
