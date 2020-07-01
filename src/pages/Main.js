import React from "react";
import { useLocation } from "react-router-dom";
import { Station, Audio } from "../components";

const stations = [
  {
    id: 0,
    src: "https://admin.scratch.radio/radio/8000/radio.mp3",
    wss: "wss://admin.scratch.radio/api/live/nowplaying/scratchlords",
  },
  {
    id: 1,
    src: "https://admin.scratch.radio/radio/8010/radio.mp3",
    wss: "wss://admin.scratch.radio/api/live/nowplaying/looperbeats",
  },
  {
    id: 2,
    src: "https://admin.scratch.radio/radio/8020/radio.mp3",
    wss: "wss://admin.scratch.radio/api/live/nowplaying/dubstation",
  },
  {
    id: 3,
    src: "https://admin.scratch.radio/radio/8030/radio.mp3",
    wss: "wss://admin.scratch.radio/api/live/nowplaying/zaebeats",
  },
  {
    id: 4,
    src: "https://admin.scratch.radio/radio/8040/radio.mp3",
    wss: "wss://admin.scratch.radio/api/live/nowplaying/nmcpstudio",
  },
];

function Main() {
  const [chosen, setChosen] = React.useState(null);
  const location = useLocation().pathname;

  const selectStation = (item) => {
    setChosen(item);
  };

  return (
    <div
      className={
        location === "/"
          ? "container container--offset_top container--offset_left container--offset_bottom"
          : "hidden-block"
      }
    >
      <div className="stations">
        {stations.map((station) => (
          <React.Fragment key={station.id}>
            <Station
              {...station}
              active={station === chosen}
              onClick={() => selectStation(station)}
            />
            <Audio
              src={station.src}
              active={station === chosen}
              onClick={() => selectStation(station)}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Main;
