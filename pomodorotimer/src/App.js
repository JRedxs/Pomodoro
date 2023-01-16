import './App.css';
import { useEffect, useState } from 'react';
import HistoriqueTime from './Components/HistoriqueTime';
function App() {

  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  const [stocktime,setStocktime] = useState([]) //historique
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

  const handleOnStart = () => {
    setTimerOn(true)
  }

  const handleOnStock = () => {
   setTimerOn(false)
   let tabTime = stocktime;
   tabTime.push(time)
   setStocktime(tabTime)
   setTime(0)      
  
  }

 function Timer(){

  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
  const secondes = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
  const millisecondes = ("0" + ((time / 10) % 100)).slice(-2)
  const totalTime = minutes+ " : " + secondes + " : " +millisecondes

  return `${totalTime}`
  // return `${minutes} : ${secondes} : ${millisecondes}`



 }


  return (
    <>
      <div className="PomodoroTimer">
          Pomodoro Timer
        </div>
        <div className='time'>
          <Timer/>
        </div>
        <div className='counter'>
        <div>
          {!timerOn && time === 0 && (
                <button className="button" onClick={handleOnStart}>Start</button>
          )}
          {timerOn &&  (
                <button className="button" onClick={handleOnStock}>Stop</button>
                
          )}


        </div>
        </div>
        <div className='affichage-text'>
          <p className="date-text">Date</p>
          <p className="score-text">Time</p>
            </div>
            <div className='score'>
            <hr className='barre'></hr>
              <p className="affichage-date">

              </p>
            <p className='affichage-score'>
              <HistoriqueTime stocktime={stocktime}/>
              

            </p>

            </div>
    </>
  );
}

export default App;

