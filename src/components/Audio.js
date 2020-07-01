import React from "react";

function Audio({ src, active }) {
  const audioRef = React.useRef();

  React.useEffect(() => {
    active ? audioRef.current.play() : audioRef.current.pause();
  });

  return (
    <audio
      src={src}
      preload={active ? "auto" : "none"}
      playsInline
      loop
      ref={audioRef}
    ></audio>
  );
}

export default Audio;
