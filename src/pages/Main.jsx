import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MAIN_HOST } from '../data';
import { Station } from '../components';
import { setCurrentStation } from '../redux/actions/set-current-station';
import { connectWss } from '../redux/actions/connect-wss';
import { fetchStations } from '../redux/actions/fetch-stations';

function Main() {
  const dispatch = useDispatch();
  const {
    items, loading, current, openWss,
  } = useSelector(
    ({ stations }) => stations,
  );

  const selectStation = (item) => {
    const { id } = item.station;
    const url = item.station.listen_url;

    if (current.id === id) {
      dispatch(setCurrentStation({}));
    } else {
      dispatch(setCurrentStation({ id, url }));
    }
  };

  const descStation = (artist, song, desc, streamer, isLive) => {
    let string;

    if (desc === 'live' || isLive) {
      string = streamer;
    } else if (artist) {
      string = `${song} (${artist})`;
    } else {
      string = song;
    }

    return string;
  };

  React.useEffect(() => {
    if (loading) {
      dispatch(fetchStations());
    } else if (!openWss) {
      dispatch(connectWss(items));
    }
  });

  return (
    <div className="container container--offset_top container--offset_left">
      <div className="stations">
        {items.map((item) => {
          const { id, name, description } = item.station;
          const { is_live, streamer_name } = item.live;
          const { elapsed, duration, song } = item.now_playing;
          const {
            art, artist, title, album,
          } = song;

          const isShow = window.location.hostname !== MAIN_HOST
            ? description !== 'disable'
            : true;

          return (
            isShow && (
            <Station
              key={id}
              id={id}
              name={name}
              status={description}
              description={descStation(artist, title, description, streamer_name, is_live)}
              isLive={is_live}
              elapsed={elapsed}
              duration={duration}
              art={art}
              album={album}
              active={id === current.id}
              onClick={() => selectStation(item)}
            />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Main;
