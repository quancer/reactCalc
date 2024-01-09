export default function Button(probs) {
  const { data } = probs;
  let classBtn = "btn";
  console.log(data);
  if (data == "AC" || data == "+/-" || data == "%") {
    classBtn = "btn gray-bg";
  }
  if (data == "+" || data == "-" || data == "/" || data == "*" || data == "=") {
    classBtn = "btn orange-bg";
  }
  if (data == "0") {
    classBtn = "btn lg";
  }
  return <button className={classBtn}>{data}</button>;
}
