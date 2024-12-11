/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import DrumPad from "./DrumPad.jsx";

export default function DrumSet({ onClick, bank, volume }) {
  const clickedPad = useRef({});
  const acceptedKeys = Array.from(bank, (x) => x.key);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const pressed = e.code.slice(3);
      if (acceptedKeys.includes(pressed)) {
        clickedPad[pressed].current.click();
      } else {
        return;
      }
    });
    return document.removeEventListener("keydown", (e) => {
      const pressed = e.code.slice(3);
      if (acceptedKeys.includes(pressed)) {
        clickedPad[pressed].current.click();
      } else {
        return;
      }
    });
  }, [acceptedKeys, clickedPad]);

  return (
    <ul id="drum-set">
      {bank.map((drumpad, index) => {
        return (
          <li className="drumpad-list" key={drumpad.name}>
            <DrumPad
              pressedKey={drumpad.key}
              index={index}
              onClick={onClick}
              bank={bank}
              volume={volume}
              name={drumpad.name}
              clickedPad={clickedPad}
            />
          </li>
        );
      })}
    </ul>
  );
}
