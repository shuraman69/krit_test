import React from 'react';
import { getTime } from '../utilities';

function Station({
  active = null,
  onClick = (f) => f,
  station,
  now_playing,
  live,
}) {
  const [openPopup, setOpenPopup] = React.useState(false);

  const openMenu = (e) => {
    e.stopPropagation();
    setOpenPopup(!openPopup);
  };

  React.useEffect(() => {});

  return (
    <React.Fragment>
      <div
        onClick={onClick}
        className={active ? 'stationItem stationItem--current' : 'stationItem'}
      >
        <div className="stationItem__container container">
          <figure className="stationItem__figure">
            <img
              src={now_playing?.song.art}
              alt={now_playing?.song.text}
              className="stationItem__image"
            />
          </figure>
          <div className="stationItem__contains">
            <span className="stationItem__name">
              {station?.name}
              {live.is_live && (
                <span className="status stationItem__status">live</span>
              )}
              <span
                className="status status--more stationItem__status"
                onClick={(e) => openMenu(e)}
              >
                info
              </span>
            </span>
            <span className="stationItem__description">
              {now_playing.song?.artist
                ? now_playing.song?.title +
                  ' (' +
                  now_playing.song?.artist +
                  ')'
                : now_playing.song?.title}
            </span>
            {true && (
              <div className="timer stationItem__timer">
                <span className="timer__count">
                  {getTime(now_playing?.elapsed)}
                </span>
                /
                <span className="timer__count">
                  {getTime(now_playing?.duration)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          openPopup
            ? 'popup popup--visible stationDetail'
            : 'popup stationDetail'
        }
        style={{
          backgroundImage: `url(${now_playing?.song.art})`,
        }}
      >
        <div className="popup__content">
          <div className="popup__container">
            <div className="popup__header">
              <button type="button" className="backButton" onClick={openMenu}>
                <svg
                  width={12}
                  height={23}
                  viewBox="0 0 12 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2186 21.4055L2.00002 11.0444L11.2186 1.00007"
                    stroke="#E7ECFF"
                    strokeWidth={2}
                  />
                </svg>
              </button>
              <span className="stationDetail__name">{station?.name}</span>
              <div></div>
            </div>
            <figure className="stationDetail__figure">
              <img src={now_playing?.song.art} alt={now_playing?.song.text} />
            </figure>
            <div className="stationDetail__description">
              {now_playing.song?.artist
                ? now_playing.song?.title +
                  ' (' +
                  now_playing.song?.artist +
                  ')'
                : now_playing.song?.title}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Station;
