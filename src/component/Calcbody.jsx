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
  const [currentSceen, setCurrentSceen] = useState(0);
  const [prevScreen, setPrevScreen] = useState(0);
  const [todoOp, setTodoOp] = useState("");
  const [dotBool, setdotBool] = useState("false");
  const [opBool, setopBool] = useState("false");
  function pressedBtn(val) {
    switch (val) {
      case "AC":
        res();
        break;
      case "+/-":
        absoluteVal();
        break;
      case "%":
        procent();
        break;
      case ".":
        dot();
        break;
      case "+":
        changeTodoOp(val);
        break;
      case "/":
        changeTodoOp(val);
        break;
      case "*":
        changeTodoOp(val);
        break;
      case "-":
        changeTodoOp(val);
        break;
      case "=":
        equalHandler();
        break;

      default:
        changeScreen(val);
      // code block
    }
  }
  function res() {
    setCurrentSceen("0");
    setPrevScreen("");
    setTodoOp("");
    setdotBool("false");
    setopBool("false");
  }
  function absoluteVal() {
    setCurrentSceen(-1 * currentSceen);
  }
  function procent() {
    // console.log(currentSceen / 100);
    if (currentSceen < 100) {
      setdotBool("true");
    }
    setCurrentSceen(currentSceen / 100);
  }
  function dot() {
    if (dotBool == "false") {
      setCurrentSceen(currentSceen + ".");
      setdotBool("true");
    }
  }
  function changeScreen(val) {
    if (opBool == "true") {
      setCurrentSceen("" + val);
      setopBool("false");
    } else if (currentSceen == "0") {
      setCurrentSceen("" + val);
    } else {
      setCurrentSceen(currentSceen + val);
    }
  }
  function changeTodoOp(val) {
    if (opBool == "true") {
      setTodoOp(val);
      let sum = Number(prevScreen) + Number(currentSceen);
      setPrevScreen(sum);
      setCurrentSceen(sum);
      // setCurrentSceen(0);
    } else {
      console.log("opclick");
      setTodoOp(val);
      setPrevScreen(currentSceen);
      // setCurrentSceen(0);
      setopBool("true");
    }
  }
  function equalHandler() {
    let result;
    switch (todoOp) {
      case "+":
        result = Number(prevScreen) + Number(currentSceen) + "";

        break;
      case "-":
        result = Number(prevScreen) - Number(currentSceen) + "";
        break;
      case "*":
        result = Number(prevScreen) * Number(currentSceen) + "";
        break;
      case "/":
        result = Number(prevScreen) / Number(currentSceen) + "";
        break;

      default:
        changeScreen(val);
      // code block
    }
    setCurrentSceen(result);
  }
  return (
    <div className="calc">
      <Header value={currentSceen} />
      <div className="calc-body">
        {buttons.map((val, index) => {
          return <Button value={val} key={index} pressedBtn={pressedBtn} />;
        })}
      </div>
    </div>
  );
}
