import React from 'react';
import Button from '../Button/Button'

function Timer() {

    let millisec = 0;
    var interval;

    function start () {
        interval =  setInterval(myTimer, 20);
    }
    function pause () {
        clearInterval(interval);
    }
    function reset () {
        millisec = 0;
        document.getElementById("timer").innerHTML = msToTime(millisec);
    }
  
    function myTimer() {
      millisec = millisec + 20;
      document.getElementById("timer").innerHTML = msToTime(millisec);
    }

    function msToTime(duration) {
      var milliseconds = Math.floor((duration % 1000)/10),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;
      milliseconds = (milliseconds < 1000) ? " " + milliseconds : milliseconds;

      return hours + " : " + minutes + " : " + seconds + " . " + milliseconds;
    }

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span id="timer">{msToTime(0)}</span>
        <p></p>
      </div>
      <Button onClick={start}>Start</Button>
      <Button onClick={pause}>Stop</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default Timer;