/* eslint-disable react/prop-types */
export default function Power({ power, onTooglePower }) {
    return (
      <div id="power">
        Power
        <div
          id="on-off"
          onClick={onTooglePower}
          style={
            power ? { backgroundColor: "green" } : { backgroundColor: "red" }
          }
        ></div>
      </div>
    );
  }