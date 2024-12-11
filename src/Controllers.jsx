/* eslint-disable react/prop-types */
import Display from "./Display.jsx";
import Power from "./Power.jsx";
import Bank from "./Bank.jsx";
import Volume from "./Volume.jsx";

export default function Controllers({
  power,
  onTooglePower,
  bank,
  onToogleBank,
  clicked,
  volume,
  onVolumeChange,
}) {
  return (
    <>
      <Display clicked={clicked} />
      <Power power={power} onTooglePower={onTooglePower} />
      <Bank bank={bank} onToogleBank={onToogleBank} />
      <Volume volume={volume} onVolumeChange={onVolumeChange} />
    </>
  );
}
