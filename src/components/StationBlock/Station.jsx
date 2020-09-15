import React from 'react';

import { Detail } from './index';
import { getTime } from '../../util/';

function Station({ active = null, onClick = (f) => f, station, now_playing, live }) {
  const [openPopup, setOpenPopup] = React.useState(false);

  const openDetailStation = (event) => {
    event.stopPropagation();
    setOpenPopup(!openPopup);
  };

  return (
    <>
      <div
        onClick={onClick}
        className={active ? 'station-item station-item--current' : 'station-item'}
      >
        <div className="station-item__container container">
          <figure className="station-item__figure">
            <img
              src={now_playing?.song.art}
              alt={now_playing?.song.text}
              className="station-item__image"
            />
          </figure>
          <div className="station-item__contains">
            <span className="station-item__name">
              {station?.name}
              {live.is_live && <span className="status station-item__status">live</span>}
              <span
                className="status status--more station-item__status"
                onClick={(e) => openDetailStation(e)}
              >
                info
              </span>
            </span>
            <span className="station-item__description">
              {now_playing.song?.artist
                ? `${now_playing.song?.title} (${now_playing.song?.artist})`
                : now_playing.song?.title}
            </span>
            {true && (
              <div className="timer station-item__timer">
                <span className="timer__count">{getTime(now_playing?.elapsed)}</span>/
                <span className="timer__count">{getTime(now_playing?.duration)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <Detail
        setOpenPopup={setOpenPopup}
        openDetailStation={openDetailStation}
        openPopup={openPopup}
        station={station}
        now_playing={now_playing}
      />
    </>
  );
}

export default Station;
