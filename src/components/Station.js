import React from "react";
import { getTime } from "../utilities";

function Station({ active = null, onClick = (f) => f, wss = "" }) {
  const [stationData, setStationData] = React.useState({
    station: {
      name: "",
      shortcode: "",
      description: "",
      listen_url: "",
    },
    live: { is_live: false, streamer_name: "" },
    now_playing: {
      elapsed: 0,
      remaining: 0,
      duration: 0,
      song: {
        text: "",
        artist: "",
        title: "",
        album: "",
        lyrics: "",
        art: "",
      },
    },
  });

  const connect = (ws) => {
    ws.onmessage = (response) => {
      const data = JSON.parse(response.data);
      setStationData(data);
    };
  };

  React.useEffect(() => {
    const ws = new WebSocket(`${wss}`);

    connect(ws);

    return function cleanup() {
      ws.close();
    };
  }, [wss]);

  return (
    <div
      onClick={onClick}
      className={active ? "stationItem stationItem--current" : "stationItem"}
    >
      <div className="stationItem__container container">
        <figure className="stationItem__figure">
          <img
            src={stationData.now_playing.song.art}
            alt={stationData.station.shortcode}
            className="stationItem__image"
          />
        </figure>
        <div className="stationItem__contains">
          <span className="stationItem__name">
            {stationData.station.name}
            {stationData.live.is_live && (
              <span className="status stationItem__status">live</span>
            )}
          </span>
          <span className="stationItem__description">
            {stationData.now_playing.song.title}
          </span>
          {active && (
            <div className="timer stationItem__timer">
              <span className="timer__count">
                {getTime(stationData.now_playing.elapsed)}
              </span>
              /
              <span className="timer__count">
                {getTime(stationData.now_playing.duration)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Station;
