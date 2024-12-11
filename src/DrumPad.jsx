/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function DrumPad({
  index,
  onDrumPadClick,
  bank,
  name,
  clickedPad,
  pressedKey,
  power,
}) {
  const currentAudio = useRef(null);
  const currentButton = useRef(null);

  // clickedPad ref is mutated instead of using state to avoid re-renders of the DrumSet component
  clickedPad[pressedKey] = currentButton;

  return (
    <>
      <button
        ref={currentButton}
        className="drum-pad"
        id={index}
        onClick={(e) => {
          if (power) {
            onDrumPadClick(e, currentAudio, index);
          }
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
