/* eslint-disable react/prop-types */
import { bankOne } from "./banks";

export default function Bank({ bank, onToogleBank }) {
  return (
    <div id="bank">
      Bank
      <div id="bank-selector" onClick={() => onToogleBank()}>
        {bank === bankOne ? "1" : "2"}
      </div>
    </div>
  );
}
