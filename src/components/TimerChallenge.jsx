import { useState } from "react";

export default function TimerChallenge({title , targetTime}) {
   const [timerStarted , setTimerStarted] = useState(false)
    const [timerExpired , setTimerExpired] =  useState(false)
    function handleStart() {
        setTimerStarted(true)
        setTimeout(() => {
         setTimerExpired(true)   
        }, targetTime * 1000);
    }
    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired &&'You lost'}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s" : ''}
        </p>
        <p>
            <button onClick={handleStart}>
                {timerStarted ? 'Stop Challenge!' : 'Start Challeng!'  }
            </button>
        </p>
        <p className="">
            {timerStarted ? "Time is running!!" : "Timer is inActive"} 
        </p>
    </section>
}