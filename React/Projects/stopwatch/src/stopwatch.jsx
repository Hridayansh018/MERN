import React, {useRef, useState, useEffect} from "react";

function Stopwatch() {

    const [running, setRunning] = useState(false)
    const [elapsedtime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {
        if (running) {
          intervalIdRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
          }, 10);
        } else {
          clearInterval(intervalIdRef.current);
        }
    
        return () => clearInterval(intervalIdRef.current);
      }, [running]);
    

    function start(){
        setRunning(true)
        startTimeRef.current = Date.now() - elapsedtime
    }

    function stop(){
        setRunning(false)
    }

    function reset(){
        setElapsedTime(0)
        setRunning(false)
    }

    function formatTime(){
        let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedtime / (1000 * 60)) % 60);
        let seconds = Math.floor((elapsedtime / 1000) % 60);
        let milliseconds = Math.floor((elapsedtime % 1000) / 10);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    
    }
 
    return(
        <div className="stopwatch">
      <div className="display">
        {formatTime()}
        <div className="controls">
          <button className="start" onClick={start}>Start</button>
          <button className="stop" onClick={stop}>Stop</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
    )
}

export default Stopwatch