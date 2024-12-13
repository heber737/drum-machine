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

  function handleDrumPadClick(e, audioFile, index) {
    setClicked(bank[e.target.id].name);
    if (
      audioFile.current.paused == false &&
      audioFile.current.currentTime > 0
    ) {
      audioFile.current.src = bank[index].source;
    }
    audioFile.current.volume = volume;
    audioFile.current.play();
    e.target.style.backgroundColor = "white";
    setTimeout(() => {
      e.target.style.backgroundColor = "#0D7377";
    }, 150);
  }

  function handleVolumeChange(e) {
    setVolume(e.target.value);
  }

  return (
    <div id="drum-machine">
      <div id="drum-set-wrapper">
        <DrumSet onDrumPadClick={handleDrumPadClick} bank={bank} power={power} />
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
