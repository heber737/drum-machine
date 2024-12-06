/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { bankOne, bankTwo } from "./banks.js";

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

  function toogleBank() {
    if (bank === bankOne) {
      setBank(bankTwo);
    } else {
      setBank(bankOne);
    }
  }

  function handleClick(e) {
    setClicked(bank[e.target.innerText].name);
  }

  function handleVolume(e) {
    setVolume(e.target.value);
  }

  return (
    <div id="drum-machine">
      <div id="drum-set-wrapper">
        <DrumSet handleClick={handleClick} bank={bank} volume={volume} />
      </div>
      <div id="controllers">
        <Controllers
          power={power}
          onTooglePower={handleTooglePower}
          bank={bank}
          toogleBank={toogleBank}
          clicked={clicked}
          volume={volume}
          handleVolume={handleVolume}
        />
      </div>
    </div>
  );
}

function DrumSet({ handleClick, bank, volume }) {
  return (
    <ul id="drum-set">
      {bank.map((drumpad, index) => {
        return (
          <li className="drumpad-list" key={drumpad.key}>
            <DrumPad
              index={index}
              handleClick={handleClick}
              bank={bank}
              volume={volume}
              name={drumpad.name}
            />
          </li>
        );
      })}
    </ul>
  );
}

function DrumPad({ index, handleClick, bank, volume, name }) {
  const acceptedKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  document.addEventListener("keydown", (e) => {
    let pressed = e.code.slice(3);
    let clickedButton = document.getElementById(pressed + "input");
    if (acceptedKeys.includes(pressed)) {
      clickedButton.click();
    } else {
      return;
    }
  });
  return (
    <>
      <button
        className="drum-pad"
        id={name + "input"}
        onClick={(e) => {
          handleClick(e);
          let currentAudio = document.getElementById(name);
          if (
            currentAudio.paused == false &&
            currentAudio.paused == false &&
            currentAudio.currentTime > 0
          ) {
            currentAudio.src = "";
            currentAudio.src = bank[index].source;
          }
          currentAudio.volume = volume;
          currentAudio.play();
          e.target.style.backgroundColor = "white";
          setTimeout(() => {
            e.target.style.backgroundColor = "#0D7377";
          }, 150);
        }}
      >
        {name}
        <audio
          className="clip"
          src={bank[index].source}
          id={name}
        ></audio>
      </button>
    </>
  );
}

function Controllers({
  power,
  onTooglePower,
  bank,
  toogleBank,
  clicked,
  volume,
  handleVolume,
}) {
  return (
    <>
      <Display clicked={clicked} />
      <Power power={power} onTooglePower={onTooglePower} />
      <Bank bank={bank} toogleBank={toogleBank} />
      <Volume volume={volume} handleVolume={handleVolume} />
    </>
  );
}

function Display({ clicked }) {
  return <div id="display">{clicked}</div>;
}

function Power({ power, onTooglePower }) {
  return (
    <div id="power">
      Power
      <div
        id="on-off"
        onClick={onTooglePower}
        style={
          power ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
      ></div>
    </div>
  );
}

function Bank({ bank, toogleBank }) {
  return (
    <div id="bank">
      Bank
      <div id="bank-selector" onClick={() => toogleBank()}>
        {bank === bankOne ? "1" : "2"}
      </div>
    </div>
  );
}

function Volume({ volume, handleVolume }) {
  return (
    <div id="volume">
      <input
        id="slider"
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => handleVolume(e)}
      />
    </div>
  );
}
