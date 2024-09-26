/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

export default function App() {
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(bankOne);
  const [clicked, setClicked] = useState(null);
  const [volume, setVolume] = useState(0.5);

  function tooglePower() {
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
    setVolume(e.target.value)
  }

  return (
    <div id="main">
      <DrumMachine
        power={power}
        tooglePower={tooglePower}
        bank={bank}
        toogleBank={toogleBank}
        clicked={clicked}
        handleClick={handleClick}
        volume={volume}
        handleVolume={handleVolume}
      />
    </div>
  );
}

function DrumMachine({
  power,
  tooglePower,
  bank,
  toogleBank,
  clicked,
  handleClick,
  volume,
  handleVolume
}) {
  return (
    <div id="drum-machine">
      <div id="drum-set-wrapper">
        <DrumSet handleClick={handleClick} bank={bank} volume={volume} />
      </div>
      <div id="controllers">
        <Controllers
          power={power}
          tooglePower={tooglePower}
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
    <div id="drum-set">
      <DrumPad innerText="Q" handleClick={handleClick} bank={bank} volume={volume}/>
      <DrumPad innerText="W" handleClick={handleClick} bank={bank} volume={volume}/>
      <DrumPad innerText="E" handleClick={handleClick} bank={bank} volume={volume}/>
      <DrumPad innerText="A" handleClick={handleClick} bank={bank} volume={volume}/>
      <DrumPad innerText="S" handleClick={handleClick} bank={bank} volume={volume}/>
      <DrumPad innerText="D" handleClick={handleClick} bank={bank} volume={volume}/>
      <DrumPad innerText="Z" handleClick={handleClick} bank={bank} volume={volume}/>
      <DrumPad innerText="X" handleClick={handleClick} bank={bank} volume={volume}/>
      <DrumPad innerText="C" handleClick={handleClick} bank={bank} volume={volume}/>
    </div>
  );
}

function DrumPad({ innerText, handleClick, bank, volume }) {
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
        id={innerText + "input"}
        onClick={(e) => {
          handleClick(e);
          let currentAudio = document.getElementById(innerText);
          if (
            currentAudio.paused == false &&
            currentAudio.paused == false &&
            currentAudio.currentTime > 0
          ) {
            currentAudio.src = "";
            currentAudio.src = bank[innerText].source;
          }
          currentAudio.volume = volume;
          currentAudio.play();
          e.target.style.backgroundColor = "white";
          setTimeout(() => {
            e.target.style.backgroundColor = "#0D7377";
          }, 150);
        }}
      >
        {innerText}
        <audio
          className="clip"
          src={bank[innerText].source}
          id={innerText}
        ></audio>
      </button>
    </>
  );
}

function Controllers({ power, tooglePower, bank, toogleBank, clicked, volume, handleVolume }) {
  return (
    <>
      <Display clicked={clicked} />
      <Power power={power} tooglePower={tooglePower} />
      <Bank bank={bank} toogleBank={toogleBank} />
      <Volume  volume={volume} handleVolume={handleVolume}/>
    </>
  );
}

function Display({ clicked }) {
  return <div id="display">{clicked}</div>;
}

function Power({ power, tooglePower }) {
  return (
    <div id="power">
      Power
      <div
        id="on-off"
        onClick={tooglePower}
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
      <input id="slider" type="range" min="0" max="1" step="0.1" value={volume} onChange={(e) => handleVolume(e)}/>
    </div>
  );
}

const bankOne = {
  Q: {
    name: "Heater 1",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  W: {
    name: "Heater 2",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  E: {
    name: "Heater 3",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  A: {
    name: "Heater 4",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  S: {
    name: "Clap",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  D: {
    name: "Open-HH",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  Z: {
    name: "Kick-n'-Hat",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  X: {
    name: "Kick",
    source: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  C: {
    name: "Closed-HH",
    source: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
};

const bankTwo = {
  Q: {
    name: "C",
    source: "https://ia600106.us.archive.org/13/items/24-piano-keys/key08.mp3",
  },
  W: {
    name: "D",
    source: "https://ia800106.us.archive.org/13/items/24-piano-keys/key10.mp3",
  },
  E: {
    name: "E",
    source: "https://ia600106.us.archive.org/13/items/24-piano-keys/key12.mp3",
  },
  A: {
    name: "F",
    source: "https://ia800106.us.archive.org/13/items/24-piano-keys/key13.mp3",
  },
  S: {
    name: "G",
    source: "https://ia600106.us.archive.org/13/items/24-piano-keys/key15.mp3",
  },
  D: {
    name: "A",
    source: "https://ia800106.us.archive.org/13/items/24-piano-keys/key17.mp3",
  },
  Z: {
    name: "B",
    source: "https://ia800106.us.archive.org/13/items/24-piano-keys/key19.mp3",
  },
  X: {
    name: "C2",
    source: "https://ia800106.us.archive.org/13/items/24-piano-keys/key20.mp3",
  },
  C: {
    name: "D2",
    source: "https://ia600106.us.archive.org/13/items/24-piano-keys/key22.mp3",
  },
};
