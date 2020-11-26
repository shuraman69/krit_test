import React from 'react';
import PropTypes from 'prop-types';

import { getTime } from '../../util';

function Timer({ elapsed = 0, duration = 0 }) {
  return (
    <div className="timer station-item__timer">
      <span className="timer__count">
        {getTime(elapsed)}
      </span>
      /
      <span className="timer__count">
        {getTime(duration)}
      </span>
    </div>
  );
}

Timer.propTypes = {
  elapsed: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Timer;
