import React from 'react';
import { useLocation } from 'react-router-dom';
import { Station, Media } from '../components';

import { root } from '../routes/';
import { stations } from '../data/stations';

let a = new Audio();

function Main() {
  const [chosen, setChosen] = React.useState(null);
  const location = useLocation().pathname;

  //Когда здесь объявлено - в iphone работает.
  //let a = new Audio();

  const selectStation = (item) => {
    setChosen(item);
  };

  return (
    <div
      className={
        location === `${root}`
          ? 'container container--offset_top container--offset_left container--offset_bottom'
          : 'hidden-block'
      }
    >
      <div className="stations">
        {stations.map((station) => (
          <React.Fragment key={station.id}>
            <Station
              {...station}
              active={station === chosen}
              onClick={() => selectStation(station)}
            />
            <Media src={station.src} active={station === chosen} audio={a} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Main;
