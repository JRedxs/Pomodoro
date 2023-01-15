import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [time, setTime] = useState(0)
  const date = useState(`${new Date()}`);
  const [timerOn, setTimerOn] = useState(false)
  const stocktime = useState([])
  
 

  

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

  // console.log(time) on doit récuperer ca

  const handleOnStart = () => {
    setTimerOn(true)
  }

  const handleOnStock = () => {
   setTimerOn(false)
   const a = localStorage.setItem('id', JSON.stringify(time))
   const b = localStorage.setItem('date', JSON.stringify(date))
   setTime(0)
   stocktime.push(a,b)
   
    //setStocktime([...stocktime, { time: time, date: date}]) 
      
  
  }


  //comprendre le useffect et l'incrémentation dans le localstorage

 function Timer(){

  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
  const secondes = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
  const millisecondes = ("0" + ((time / 10) % 100)).slice(-2)

  return `${minutes} : ${secondes} : ${millisecondes}`



 }

//  console.log(time)


 
 console.log("PLEIN",localStorage)

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
              {/* {stocktime.map(i => (
                  <p key={i}> <i/>{date} </p>
                ))} */}
              </p>
            <p className='affichage-score'>
              {/* {stocktime.map(i => (
                <p key={i}> <p> {time} </p></p>
              ))} */}

            </p>

            </div>
    </>
  );
}

export default App;

