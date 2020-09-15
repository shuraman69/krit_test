import React from 'react';

function Contacts() {
  return (
    <div className="contacts">
      <span className="contacts__title">Contact us</span>
      <a href="mailto:info@scratch.radio" className="link link--theme_gray contacts__link">
        info@scratch.radio
      </a>
      <a href="/" className="link link--theme_gray contacts__link">
        facebook
      </a>
    </div>
  );
}

export default Contacts;
