/* eslint-disable react/prop-types */
export default function DrumPad({ index, handleClick, bank, volume, name }) {
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
          id={index}
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
          <audio className="clip" src={bank[index].source} id={name}></audio>
        </button>
      </>
    );
  }