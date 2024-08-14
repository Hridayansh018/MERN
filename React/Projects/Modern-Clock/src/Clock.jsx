import React, { useEffect, useState } from 'react'

function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        const interval = setInterval(() =>{
            setTime(new Date())
        }, 1000)

        return() => clearInterval(interval)
    }, [])
    
    function timeToString(time){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return hours + ':' + minutes + ':' + seconds + ':' + meridiem
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{timeToString(time)}</span>
            </div>
        </div>
    )
}

export default DigitalClock