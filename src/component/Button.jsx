import { useState } from "react";
export default function Button(probs) {
  const { data } = probs;
  const [item, setiD] = useState(0);
  let classBtn = "btn";
  if (data == "AC" || data == "+/-" || data == "%") {
    classBtn = "btn gray-bg";
  }
  if (data == "+" || data == "-" || data == "/" || data == "*" || data == "=") {
    classBtn = "btn orange-bg";
  }
  if (data == "0") {
    classBtn = "btn lg";
  }
  function handleclick() {
    console.log(item);
  }
  return (
    <button className={classBtn} onClick={handleclick}>
      {data}
    </button>
  );
}
