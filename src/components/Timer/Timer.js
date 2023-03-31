import React from 'react';
import Button from '../Button/Button'
import { useState, useEffect } from 'react';

const Timer = () => {
    const [miliseconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
    function start() {
      setIsActive(true);
    }
    function stop() {
      setIsActive(false);
    }

    function msToTime(duration) {
      var milliseconds = Math.floor((duration % 1000)),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      milliseconds = (milliseconds < 1000) ? " " + milliseconds : milliseconds;

      return hours + " : " + minutes + " : " + seconds + " . " + milliseconds;
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(miliseconds => miliseconds + 25);
        }, 25);
      } else if (!isActive && miliseconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, miliseconds]);

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span id="timer">{msToTime(miliseconds)}</span>
        <p></p>
      </div>
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default Timer;