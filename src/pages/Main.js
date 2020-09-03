import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { Station, Media } from '../components';
import { setStations, setCurrentStation } from '../redux/actions/stations';
import { root } from '../routes/';

function Main() {
  const dispatch = useDispatch();
  const { items, loading, current } = useSelector(({ stations }) => stations);
  const location = useLocation().pathname;

  const selectStation = (item) => {
    if (current === item.station.id) {
      dispatch(setCurrentStation(null));
    } else {
      dispatch(setCurrentStation(item.station.id));
    }
  };

  React.useEffect(() => {
    fetch('https://admin.scratch.radio/api/nowplaying')
      .then((response) => response.json())
      .then((data) => {
        if (!loading) {
          dispatch(setStations(data));
        }
      });
  });

  const arAudio = [
    new Audio(),
    new Audio(),
    new Audio(),
    new Audio(),
    new Audio(),
  ];

  console.log(arAudio);

  return (
    <div
      className={
        location === `${root}`
          ? 'container container--offset_top container--offset_left container--offset_bottom'
          : 'hidden-block'
      }
    >
      <div className="stations">
        {items.map((station) => (
          <React.Fragment key={station.station.id}>
            <Station
              {...station}
              active={station.station.id === current}
              onClick={() => selectStation(station)}
            />
            {
              <Media
                src={station.station.listen_url}
                active={station.station.id === current}
                a={arAudio[station.station.id - 9]}
              />
            }
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Main;
