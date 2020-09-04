import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { Station } from '../components';
import {
  setStations,
  setCurrentStation,
  setStation,
} from '../redux/actions/stations';
import { root } from '../routes/';
import { API_URL, API_WSS } from '../data/';

function Main() {
  const dispatch = useDispatch();
  const { items, loading, current } = useSelector(({ stations }) => stations);
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

  items.map((item) => {
    // const wss = API_WSS + item.station.shortcode;
    // const ws = new WebSocket(wss);

    // ws.onmessage = function (response) {
    //   const data = JSON.parse(response.data);
    //   dispatch(setStation(data.station.id, data));
    // };
    return false;
  });

  React.useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (!loading) dispatch(setStations(data));
      });
  });

  return (
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
          <React.Fragment key={station.station.id}>
            <Station
              {...station}
              active={station.station.id === current.id}
              onClick={() => selectStation(station)}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Main;
