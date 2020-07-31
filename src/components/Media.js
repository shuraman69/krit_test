import React from 'react';

function Media({ src, active, audio }) {
  // const audioRef = React.useRef();
  // console.log(active);
  React.useEffect(() => {
    if (active) {
      audio.pause();
      audio.src = src;
      audio.play();
    }
  });

  return null;
}

export default Media;
