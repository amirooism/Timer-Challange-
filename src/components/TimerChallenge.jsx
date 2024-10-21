import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    //when timeReamain is smmaller or equal to zero we know that times UP !! but the problem is setInterval refresh every 10ms so we should add it to this if condition , and then setTimeremaing back to initial time after that
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open(); //When its finished open the dialog  and we do the same in handle stop
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open(); //now if we stop the time or time expirece dialog would show but the text is still the same because we do nothing yet :D
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challeng
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running...!!" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
}
