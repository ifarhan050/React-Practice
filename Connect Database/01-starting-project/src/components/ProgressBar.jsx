import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
ProgressBar.propTypes = {
  timer: PropTypes.number.isRequired,
};
