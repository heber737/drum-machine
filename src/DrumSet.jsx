/* eslint-disable react/prop-types */
import DrumPad from "./DrumPad.jsx";

export default function DrumSet({ handleClick, bank, volume }) {
    return (
      <ul id="drum-set">
        {bank.map((drumpad, index) => {
          return (
            <li className="drumpad-list" key={drumpad.name}>
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