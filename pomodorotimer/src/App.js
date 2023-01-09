import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [array, setArray] = useState([])

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


  useEffect(() => {

    if (timerOn === false){
        
    }
  })


  


 function Timer(){

  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
  const secondes = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
  const millisecondes = ("0" + ((time / 10) % 100)).slice(-2)

  return minutes + ":" + secondes + ":" +  millisecondes


 }
  

  return (
    <>
      <p className="PomodoroTimer">
          Pomodoro Timer
        </p>
        <div className='time'>
          {/* <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
          <Timer/>
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
                <button class="button" onClick={() => setTime(0)}>Reset</button> //deux ecouteurs à mettre un pour remettre à 0 et un autre pour récupérer la valeur et envoyer
          )}

        </div>
        </div>
        <div className='affichage-text'>
        <p className="date-text">Date</p>
        <p className="score-text">Score</p>
        </div>
        <div className='score'>
        <hr className='barre'></hr>
        
        

        </div>
    </>
  );
}

export default App;
