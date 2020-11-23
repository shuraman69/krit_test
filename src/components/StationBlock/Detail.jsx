import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Detail({
  setOpenPopup = (f) => f,
  openDetailStation = (f) => f,
  openPopup,
  station,
  now_playing,
  live,
}) {

  const imageBg = (image, id) => {
    if (image.includes('200x200')) {
      return image.replace('200x200', '1920x1080')
    } else {
      return `/stations-ico/1920x1080_${id}.png`
    }
  }

  const closePopup = React.useCallback((event) => {
    if (event.key === 'Escape') {
      setOpenPopup(false);
    }
  }, [setOpenPopup]);

  React.useEffect(() => {
    document.addEventListener('keydown', (event) => closePopup(event));
  }, [closePopup]);

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
          <figure className="station-detail__bg">
            <img src={imageBg(now_playing?.song.art, station.id)} 
              alt={now_playing.song?.artist
                ? `${now_playing.song?.title} (${now_playing.song?.artist})`
                : now_playing.song?.title}
              className="station-detail__bg-img"
            />
          </figure>
          <div className="popup__content">
            <div className="popup__container container">
              <div className="popup__header">
                <button
                  type="button"
                  className="close-button popup__close"
                  onClick={openDetailStation}
                >
                  <svg className="close-button__icon" fill="#fff" width={19} height={19} viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2407 9.50014L18.6389 2.10154C19.1204 1.6203 19.1204 0.842184 18.6389 0.360936C18.1577 -0.120312 17.3796 -0.120312 16.8983 0.360936L9.49989 7.75953L2.10167 0.360936C1.62021 -0.120312 0.842336 -0.120312 0.361098 0.360936C-0.120366 0.842184 -0.120366 1.6203 0.361098 2.10154L7.75932 9.50014L0.361098 16.8987C-0.120366 17.38 -0.120366 18.1581 0.361098 18.6393C0.600928 18.8794 0.916268 19 1.23138 19C1.5465 19 1.86161 18.8794 2.10167 18.6393L9.49989 11.2407L16.8983 18.6393C17.1384 18.8794 17.4535 19 17.7686 19C18.0837 19 18.3988 18.8794 18.6389 18.6393C19.1204 18.1581 19.1204 17.38 18.6389 16.8987L11.2407 9.50014Z" />
                  </svg>
                </button>
                <div className="popup__title">{station?.name}</div>
              </div>
              <figure className="station-detail__figure">
                <img
                  src={now_playing?.song.art.includes('200x200') 
                  ? now_playing?.song.art.replace('200x200', '500x500') 
                  : now_playing?.song.art}
                  alt={now_playing.song?.artist
                    ? `${now_playing.song?.title} (${now_playing.song?.artist})`
                    : now_playing.song?.title}
                  className="station-detail__image"
                />
              </figure>
              {station.description === 'live' ? 
                <span className="station-detail__description">
                  {live.streamer_name}
                </span> :
                <span className="station-detail__description">
                  {now_playing.song?.artist
                    ? `${now_playing.song?.title} (${now_playing.song?.artist})`
                    : now_playing.song?.title}
                </span>
              }
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Detail;
