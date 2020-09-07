import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { Station } from '../components';
import {
  setStations,
  setCurrentStation,
  setError,
} from '../redux/actions/stations';
import { root } from '../routes/';
import { API_URL, CONNECT_ERROR } from '../data/';

function Main() {
  const dispatch = useDispatch();
  const { items, loading, current, errorMessage } = useSelector(
    ({ stations }) => stations
  );
  const location = useLocation().pathname;
  const mediaRef = React.useRef();

  const selectStation = (item) => {
    const id = item.station.id;
    const url = item.station.listen_url;

    mediaRef.current.pause();

    if (current.id === id) {
      dispatch(setCurrentStation({ id: null, url: null }));
    } else {
      dispatch(setCurrentStation({ id, url }));
      mediaRef.current.load();
      mediaRef.current.play();
    }
  };

  React.useEffect(() => {
    if (!loading) {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          dispatch(setStations(data));
        })
        .catch((error) => dispatch(setError(CONNECT_ERROR)));
    }
  });

  return (
    <>
      {errorMessage && (
        <div className="alert">
          <span className="alert__description">{errorMessage}</span>
        </div>
      )}
      <div
        className={
          location === `${root}`
            ? 'container container--offset_top container--offset_left container--offset_bottom'
            : 'hidden-block'
        }
      >
        <audio ref={mediaRef}>
          <source src={current.url} />
          Your browser does not support the
          <code>audio</code> element.
        </audio>

        <div className="stations">
          {items.map((station) => (
            <Station
              key={station.station.id}
              {...station}
              active={station.station.id === current.id}
              onClick={() => selectStation(station)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
