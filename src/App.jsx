/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { bankOne, bankTwo } from "./banks.js";
import DrumSet from "./DrumSet.jsx";
import Controllers from "./Controllers.jsx";

export default function App() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(bankOne);
  const [clicked, setClicked] = useState(null);
  const [volume, setVolume] = useState(0.5);

  function handleTooglePower() {
    if (power === true) {
      setPower(false);
    } else {
      setPower(true);
    }
  }

  function handleToogleBank() {
    if (bank === bankOne) {
      setBank(bankTwo);
    } else {
      setBank(bankOne);
    }
  }

  function handleClick(e) {
    setClicked(bank[e.target.id].name);
  }

  function handleVolumeChange(e) {
    setVolume(e.target.value);
  }

  return (
    <div id="drum-machine">
      <div id="drum-set-wrapper">
        <DrumSet onClick={handleClick} bank={bank} volume={volume} />
      </div>
      <div id="controllers">
        <Controllers
          power={power}
          onTooglePower={handleTooglePower}
          bank={bank}
          onToogleBank={handleToogleBank}
          clicked={clicked}
          volume={volume}
          onVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
}
