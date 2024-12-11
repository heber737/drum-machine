/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function DrumPad({
  index,
  onClick,
  bank,
  volume,
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
          onClick(e);
          if (
            currentAudio.current.paused == false &&
            currentAudio.current.currentTime > 0
          ) {
            currentAudio.current.src = "";
            currentAudio.current.src = bank[index].source;
          }
          currentAudio.current.volume = volume;
          currentAudio.current.play();
          e.target.style.backgroundColor = "white";
          setTimeout(() => {
            e.target.style.backgroundColor = "#0D7377";
          }, 150);
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
