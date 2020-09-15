import React from 'react';

function About() {
  return (
    <div className="container container--offset_top container--offset_left container--offset_bottom text-page">
      <div className="text-page__item">
        <span className="title">About project</span>
        <p className="text text--offset_bottom">
          This project is designed to make scratch music more accessible.
        </p>
        <span className="text text--theme_gold text--size_sm">Privacy statement</span>
        <p className="text text--offset_bottom">
          The authors of the project do not approve or call for anything, nor do they oppose or support it.
          All broadcast music is the property of its authors and is provided to radio listeners free of charge.
        </p>
      </div>
    </div>
  );
}

export default About;
