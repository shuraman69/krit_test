import React from 'react';
import classNames from 'classnames';

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
        className={classNames({
          'station-item': true,
          'station-item--current': active,
          'station-item--disable': station.description === 'disable' || (station.description === 'live' && !live.is_live),
        })}
      >
        <div className="station-item__statuses">
          {live.is_live && <span className="status station-item__status">live</span>}
          <span
            className="status status--more station-item__status"
            onClick={(e) => openDetailStation(e)}
          >
            info
          </span>
        </div>
        <div className="station-item__container">
          <figure className="station-item__figure">
            <img
              src={now_playing?.song.art}
              alt={now_playing.song?.artist
                ? `${now_playing.song?.title} (${now_playing.song?.artist})`
                : now_playing.song?.title}
              className="station-item__image"
            />
          </figure>
          <div className="station-item__contains">
            <span className="station-item__name">
              {station?.name}
            </span>
            {station.description === 'live' ? 
              <span className="station-item__description">
                {live.streamer_name}
              </span> :
              <span className="station-item__description">
                {now_playing.song?.artist
                  ? `${now_playing.song?.title} (${now_playing.song?.artist})`
                  : now_playing.song?.title}
              </span>
            }
            {!station.description === 'live' && 
              <div className="timer station-item__timer">
                <span className="timer__count">{getTime(now_playing?.elapsed)}</span>/
                <span className="timer__count">{getTime(now_playing?.duration)}</span>
              </div>
            }
          </div>
        </div>
      </div>
      <Detail
        setOpenPopup={setOpenPopup}
        openDetailStation={openDetailStation}
        openPopup={openPopup}
        station={station}
        now_playing={now_playing}
        live={live}
      />
    </>
  );
}

export default Station;
