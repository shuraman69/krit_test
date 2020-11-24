import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API_URL, CONNECT_ERROR, MAIN_HOST } from '../data';
import { Station } from '../components';
import {
  setStations,
  setCurrentStation,
  setError,
} from '../redux/actions/stations';

function Main() {
  const dispatch = useDispatch();
  const {
    items, loading, current, errorMessage,
  } = useSelector(
    ({ stations }) => stations,
  );

  const selectStation = (item) => {
    const { id } = item.station;
    const url = item.station.listen_url;

    if (current.id === id) {
      dispatch(setCurrentStation({ id: null, url: null }));
    } else {
      dispatch(setCurrentStation({ id, url }));
    }
  };

  React.useEffect(() => {
    if (!loading) {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          dispatch(setStations(data));
        })
        .catch(() => dispatch(setError(CONNECT_ERROR)));
    }
  });

  return (
    <>
      {errorMessage && (
        <div className="alert">
          <span className="alert__description">{errorMessage}</span>
        </div>
      )}
      <div className="container container--offset_top container--offset_left">
        <div className="stations">
          {items.map((item) => {
            const { id, name, description } = item.station;
            const { is_live, streamer_name } = item.live;
            const { elapsed, duration, song } = item.now_playing;

            const isShow = window.location.hostname !== MAIN_HOST
              ? description !== 'disable'
              : true;

            return (
              isShow && (
                <Station
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  isLive={is_live}
                  streamerName={streamer_name}
                  elapsed={elapsed}
                  duration={duration}
                  song={song}
                  active={id === current.id}
                  onClick={() => selectStation(item)}
                />
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
