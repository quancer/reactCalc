import "../style/header.css";
export default function Header({ value }) {
  // console.log("screen:", value);
  return (
    <div className="head" id={"disp"}>
      <p className="headText" id={"headId"}>
        {value}
      </p>
    </div>
  );
}
