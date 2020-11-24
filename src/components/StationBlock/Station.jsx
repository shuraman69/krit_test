import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Detail } from './index';
import { getTime } from '../../util';

function Station({
  active = null,
  onClick = (f) => f,
  id = null,
  name = '',
  description = '',
  isLive = false,
  streamerName = '',
  elapsed = 0,
  duration = 0,
  song = {},
}) {
  const [openPopup, setOpenPopup] = React.useState(false);

  const isDisable = description === 'disable' || (description === 'live' && !isLive);

  const openDetailStation = (event) => {
    event.stopPropagation();
    setOpenPopup(!openPopup);
  };

  const descriptionStation = (songObj) => {
    let string;

    if (description === 'live') {
      string = streamerName;
    } else if (songObj?.artist) {
      string = `${songObj?.title} (${songObj?.artist})`;
    } else {
      string = songObj?.title;
    }

    return string;
  };

  return (
    <>
      <div
        role="button"
        tabIndex={isDisable ? '-1' : '0'}
        onKeyDown={onClick}
        onClick={onClick}
        className={classNames({
          'station-item': true,
          'station-item--current': active,
          'station-item--disable': isDisable,
        })}
      >
        <div className="station-item__statuses">
          {isLive && (
            <span className="status station-item__status">live</span>
          )}
          <span
            role="button"
            tabIndex={isDisable ? '-1' : '0'}
            className="status status--more station-item__status"
            onKeyDown={(event) => openDetailStation(event)}
            onClick={(event) => openDetailStation(event)}
          >
            info
          </span>
        </div>
        <div className="station-item__container">
          <figure className="station-item__figure">
            <img
              src={song?.art}
              alt={descriptionStation(song)}
              className="station-item__image"
            />
          </figure>
          <div className="station-item__contains">
            <span className="station-item__name">{name}</span>
            <span className="station-item__description">
              {descriptionStation(song)}
            </span>
            {description !== 'live' && (
              <div className="timer station-item__timer">
                <span className="timer__count">
                  {getTime(elapsed)}
                </span>
                /
                <span className="timer__count">
                  {getTime(duration)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <Detail
        setOpenPopup={setOpenPopup}
        openDetailStation={openDetailStation}
        openPopup={openPopup}
        id={id}
        name={name}
        description={descriptionStation(song)}
        isLive={isLive}
        streamerName={streamerName}
        elapsed={elapsed}
        duration={duration}
        song={song}
      />
    </>
  );
}

Station.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLive: PropTypes.bool.isRequired,
  streamerName: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  song: PropTypes.object.isRequired,
};

export default Station;
