import "./style/global.css";
import Header from "./component/Header";
import Calcbody from "./component/Calcbody";
export default function App() {
  return (
    <div className="calc">
      <Header />
      <Calcbody />
    </div>
  );
}
