import { useState } from "react";
import "../style/btn.css";
export default function Button(props) {
  const { value, clickVal } = props;
  // console.log(props, "value:", value, "click:", clickVal);
  let classBtn = "btn";
  if (value == "AC" || value == "+/-" || value == "%") {
    classBtn = "btn gray-bg";
  }
  if (
    value == "+" ||
    value == "-" ||
    value == "/" ||
    value == "*" ||
    value == "="
  ) {
    classBtn = "btn orange-bg";
  }
  if (value == "0") {
    classBtn = "btn lg";
  }
  return (
    // <button></button>
    <button
      className={classBtn}
      onClick={() => {
        // console.log("btn=", value);
        clickVal(value);
      }}
    >
      {value}
    </button>
  );
}
