import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Station, LoadingBlock } from '../components/';
import {
  setStations,
  setCurrentStation,
  setError,
} from '../redux/actions/stations';
import { API_URL, CONNECT_ERROR } from '../data';

function Main() {
  const dispatch = useDispatch();
  const { items, loading, current, errorMessage } = useSelector(
    ({ stations }) => stations
  );

  const selectStation = (item) => {
    const id = item.station.id;
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
      <div className={'container container--offset_top container--offset_left'}>
        <div className="stations">
          {loading
            ? items.map((station) => (
                <Station
                  key={station.station.id}
                  {...station}
                  active={station.station.id === current.id}
                  onClick={() => selectStation(station)}
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    </>
  );
}

export default Main;
