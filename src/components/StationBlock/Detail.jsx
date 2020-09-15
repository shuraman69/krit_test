import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Detail({
  setOpenPopup = (f) => f,
  openDetailStation = (f) => f,
  openPopup,
  station,
  now_playing,
}) {
  return (
    <div>
      <CSSTransition
        in={openPopup}
        timeout={800}
        classNames="popup"
        unmountOnExit
        onEnter={() => setOpenPopup(true)}
        onExited={() => setOpenPopup(false)}
      >
        <div className="popup station-detail">
          <div className="popup__content">
            <div className="popup__container container">
              <div className="popup__header">
                <button
                  type="button"
                  className="back-button popup__close"
                  onClick={openDetailStation}
                >
                  <svg
                    className="backButton__icon"
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
                <div className="popup__title">{station?.name}</div>
              </div>
              <figure className="station-detail__figure">
                <img
                  src={now_playing?.song.art}
                  alt={now_playing?.song.text}
                  className="station-detail__image"
                />
              </figure>
              <div className="station-detail__description">
                {now_playing.song?.artist
                  ? `${now_playing.song?.title} (${now_playing.song?.artist})`
                  : now_playing.song?.title}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Detail;
