/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function DrumPad({
  index,
  onDrumPadClick,
  bank,
  name,
  clickedPad,
  pressedKey,
}) {
  const currentAudio = useRef(null);
  const currentButton = useRef(null);
  clickedPad[pressedKey] = currentButton;
  return (
    <>
      <button
        ref={currentButton}
        className="drum-pad"
        id={index}
        onClick={(e) => {
          onDrumPadClick(e, currentAudio, index);
        }}
      >
        {name}
        <audio
          ref={currentAudio}
          className="clip"
          src={bank[index].source}
          id={name}
        ></audio>
      </button>
    </>
  );
}
