// import { useState } from "react";

// export default function Player() {
//   const [enteredPlayername, setEnterdPlayerName] = useState('');
//   const [submitted, setSubmitted] = useState(false)
  
//   function handleChange(event) {
//     setSubmitted(false)
//     setEnterdPlayerName(event.target.value);
//   }
//   function handleClick() {
//     setSubmitted(true)
//   }
//   return (
//     <section id="player">
//       <h2>welcome {submitted ? enteredPlayername : 'Unknown'}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={enteredPlayername} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }
