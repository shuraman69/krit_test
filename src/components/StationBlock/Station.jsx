import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Detail, Timer } from './index';

function Station({
  active = null,
  onClick = (f) => f,
  id = null,
  name = '',
  description = '',
  status = '',
  isLive = false,
  elapsed = 0,
  duration = 0,
  art = '',
  album = '',
}) {
  const [openPopup, setOpenPopup] = React.useState(false);

  const isDisable = status.includes('disable') === true || (status.includes('live') === true && !isLive);

  const openDetailStation = (event) => {
    event.stopPropagation();
    setOpenPopup(!openPopup);
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
          'station-item--current': active && !isDisable,
          'station-item--disable': isDisable,
        })}
      >
        <div className="station-item__statuses">
          {isLive && (
            <span className="status station-item__status">live</span>
          )}
          <button
            type="button"
            className="status status--more station-item__status"
            onKeyDown={(event) => openDetailStation(event)}
            onClick={(event) => openDetailStation(event)}
          >
            info
          </button>
        </div>
        <div className="station-item__container">
          <figure className="station-item__figure">
            <img
              src={art}
              alt={description}
              className="station-item__image"
            />
          </figure>
          <div className="station-item__contains">
            <span className="station-item__name">{name}</span>
            <span className="station-item__description">
              {description}
            </span>
            {(status !== 'live' && !isLive) && <Timer duration={duration} elapsed={elapsed} className="station-item__timer" />}
          </div>
        </div>
      </div>
      <Detail
        setOpenPopup={setOpenPopup}
        openDetailStation={openDetailStation}
        openPopup={openPopup}
        id={id}
        name={name}
        description={description}
        isLive={isLive}
        art={art}
        album={album}
      />
    </>
  );
}

Station.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLive: PropTypes.bool.isRequired,
  elapsed: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  art: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};

export default Station;
