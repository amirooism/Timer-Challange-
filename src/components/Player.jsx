import { useState } from "react";

export default function Player() {
  const [enterPlayerName, setEnterdPlayerName] = useState("");
  const [submitted, setSubmmited] = useState(false);

  function handleChange(event) {
    setSubmmited(false)
    setEnterdPlayerName(event.target.value);
  }
  function handleClick() {
    setSubmmited(true)
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? enterPlayerName : "Unknown"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
