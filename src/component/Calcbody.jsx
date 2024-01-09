import "../style/calcbody.css";
import Button from "./Button";
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
  return (
    <div className="calc-body">
      {buttons.map((e, index) => {
        return <Button data={e} key={index} />;
      })}
    </div>
  );
}
