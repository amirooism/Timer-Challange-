import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterdPlayerName] = useState("");
  // const [submitted, setSubmmited] = useState(false);

  // function handleChange(event) {
  //   setSubmmited(false);
  //   setEnterdPlayerName(event.target.value);
  // }
  function handleClick() {
    setEnterdPlayerName(playerName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? 'Unknown'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enterPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
