import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterdPlayerName] = useState("");

  function handleClick() {
    setEnterdPlayerName(playerName.current.value);
    playerName.current.value = ""; //we have imperative code here , and in React we should write imperative code , nut in this case it saves alot of code :D
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? "Unknown"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
