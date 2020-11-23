import React from 'react';

function About() {
  return (
    <section className="container container--offset_top container--offset_left container--offset_bottom text-page">
      <div className="text-page__item">
        <h1 className="title">About</h1>
        <p className="text text--offset_bottom">
          This project is designed to make scratch music more accessible.
        </p>
        <span className="text text--theme_gold text--size_sm">
          Privacy statement
        </span>
        <p className="text text--offset_bottom text-page">
          The authors of the project do not approve or call for anything, nor do they oppose or support it. All broadcast music is the property of its authors and is provided to radio listeners free of charge.
        </p>
        <span className="text text--theme_gold text--size_sm">
          Collecting user data
        </span>
        <p className="text text--offset_bottom text-page">
          The site and mobile applications collect user data using Google Analytics. The information is collected anonymously and is used only for the purpose of improving the service.
        </p>
        <span className="text text--theme_gold text--size_sm">
          Based on
        </span>
        <p className="text text--offset_bottom text-page">
          <a className="link" href="https://www.azuracast.com/" title="Online radio project" target="_blank" rel="noopener noreferrer">Azuracast</a>
          {' '}
          engine.
        </p>
      </div>
    </section>
  );
}

export default About;
