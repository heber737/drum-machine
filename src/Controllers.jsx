/* eslint-disable react/prop-types */
import Display from "./Display.jsx";
import Power from "./Power.jsc";
import Bank from "./Bank.jsx";
import Volume from "./Volume.jsx";

export default function Controllers({
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
