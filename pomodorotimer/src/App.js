import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
      let interval = null;

      if (timerOn) {
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 10)
        }, 10)
      } else {
        clearInterval(interval)
      }

      return () => clearInterval(interval)

  }, [timerOn])
  

  return (
    <>
      <p className="PomodoroTimer">
          Pomodoro Timer
        </p>
        <div className='time'>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className='counter'>
        <div>
          {!timerOn && time === 0 && (
                <button class="button" onClick={() => setTimerOn(true)}>Start</button>
          )}
          {timerOn && (
                <button class="button" onClick={() => setTimerOn(false)}>Stop</button>
          )}

          {!timerOn && time !== 0 &&(
                <button class="button" onClick={() => setTimerOn(true)}>Resume</button>
          )}&nbsp;

          {!timerOn && time > 0 &&(
                <button class="button" onClick={() => setTime(0)}>Reset</button>
          )}

        </div>
        </div>
        <p className="date-text">Date</p>
        <p className="score-text">Score</p>
        <div className='score'>
         
        <hr className='barre'></hr>

        </div>
    </>
  );
}

export default App;
