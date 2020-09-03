import React from 'react';

function Media({ src, active, a }) {
  // const audio = new Audio();
  a.src = src;

  React.useEffect(() => {
    if (active) {
      a.play();
    } else {
      a.pause();
    }
  });

  return null;
}

export default Media;
