import React from 'react';

function MobileApp() {
  return (
    <section className="container container--offset_top container--offset_left container--offset_bottom text-page">
      <h1 className="title">Mobile applications</h1>
      <p className="text">Mobile applicationns are in development now. Coming soon.</p>
      <span className="text text--theme_gold text--size_sm">iOS</span>
      <p className="text">If you are experiencing problems with background playback of radio stations, please try to launch the site in the Safari browser.</p>
      <span className="text text--theme_gold text--size_sm">Android</span>
      <p className="text">
        You can install the application on your home screen as a PWA by following the
        {' '}
        <a
          className="link"
          href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          instructions
        </a>
        .
      </p>
    </section>
  );
}

export default MobileApp;
