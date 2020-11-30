import React from 'react';
import PropTypes from 'prop-types';

import { getTime } from '../../util';

function Timer({ elapsed = 0, duration = 0, className = '' }) {
  return (
    <div className={`timer ${className}`}>
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
  className: PropTypes.string.isRequired,
};

export default Timer;
