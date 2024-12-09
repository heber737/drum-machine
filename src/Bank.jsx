/* eslint-disable react/prop-types */
import { bankOne } from "./banks";

export default function Bank({ bank, toogleBank }) {
  return (
    <div id="bank">
      Bank
      <div id="bank-selector" onClick={() => toogleBank()}>
        {bank === bankOne ? "1" : "2"}
      </div>
    </div>
  );
}
