import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTime } from '../utilities';
import { setStations } from '../redux/actions/stations';

function Station({ active = null, onClick = (f) => f, wss = '' }) {
  const dispatch = useDispatch();
  const { items } = useSelector(({ stations }) => stations);

  const [openPopup, setOpenPopup] = React.useState(false);

  const openMenu = (e) => {
    e.stopPropagation();
    setOpenPopup(!openPopup);
  };

  React.useEffect(() => {
    const ws = new WebSocket(`${wss}`);

    console.log(wss);

    ws.onmessage = (response) => {
      const data = JSON.parse(response.data);
      dispatch(setStations(data));
    };

    return function cleanup() {
      ws.close();
    };
  }, [dispatch, wss]);

  return (
    <React.Fragment>
      <div
        onClick={onClick}
        className={active ? 'stationItem stationItem--current' : 'stationItem'}
      >
        <div className="stationItem__container container">
          <figure className="stationItem__figure">
            <img
              src={items?.now_playing?.song.art}
              alt={items?.station?.shortcode}
              className="stationItem__image"
            />
          </figure>
          <div className="stationItem__contains">
            <span className="stationItem__name">
              {items?.station?.name}
              {items?.live?.is_live && (
                <span className="status stationItem__status">live</span>
              )}
              <span
                className="status status--more stationItem__status"
                onClick={(e) => openMenu(e)}
              >
                show more
              </span>
            </span>
            <span className="stationItem__description">
              {items?.now_playing.song?.title}
            </span>
            {active && (
              <div className="timer stationItem__timer">
                <span className="timer__count">
                  {getTime(items?.now_playing?.elapsed)}
                </span>
                /
                <span className="timer__count">
                  {getTime(items?.now_playing?.duration)}
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
          backgroundImage: `url(${items.now_playing?.song.art})`,
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
              <span className="stationDetail__name">{items.station.name}</span>
              <div></div>
            </div>
            <figure className="stationDetail__figure">
              <img
                src={items.now_playing?.song.art}
                alt={items.station?.shortcode}
              />
            </figure>
            <div className="stationDetail__description">
              {items.now_playing?.song?.title}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Station;
