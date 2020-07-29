import React from "react";

function AudioAudio({ src, active, audio }) {
  const audioRef = React.useRef();

  React.useEffect(() => {
    if (active) {
      audio.pause();
      audio.src = src;
      audio.play();
    }
  });

  return null;
}

export default AudioAudio;
