import "../style/calcbody.css";
import Button from "./Button";
import Header from "./Header";
import { useState } from "react";
const buttons = [
  "AC",
  "+/-",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
export default function Calcbody() {
  const [screen, screenValue] = useState("0");
  const [clickB, clickBtn] = useState("0");
  function changeScreen(val) {
    screenValue(screen + val);
  }

  function clickButton(val) {
    if (val == "+") {
      console.log(val);
      clickBtn(val);
      console.log(clickB);
    }
    if (val == "=") {
      console.log(val);
      clickBtn(val);
      console.log(clickB);
    }

    changeScreen(clickB);
  }
  return (
    <div className="calc">
      <Header value={screen} />
      <div className="calc-body">
        {buttons.map((val, index) => {
          return <Button value={val} key={index} clickVal={clickButton} />;
        })}
      </div>
    </div>
  );
}
