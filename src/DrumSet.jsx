/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import DrumPad from "./DrumPad.jsx";

export default function DrumSet({ onDrumPadClick, bank, power }) {

  const clickedPad = useRef({});
  const acceptedKeys = Array.from(bank, (x) => x.key);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const pressedKey = e.code.slice(3);
      if (acceptedKeys.includes(pressedKey)) {
        clickedPad[pressedKey].current.click();
      } else {
        return;
      }
    });
    return document.removeEventListener("keydown", (e) => {
      const pressedKey = e.code.slice(3);
      if (acceptedKeys.includes(pressedKey)) {
        clickedPad[pressedKey].current.click();
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
              name={drumpad.name}
              index={index}
              bank={bank}
              onDrumPadClick={onDrumPadClick}
              clickedPad={clickedPad}
              power={power}
            />
          </li>
        );
      })}
    </ul>
  );
}
