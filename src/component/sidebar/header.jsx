import logo from "./logo.svg";
import "./header.css";
export default function Header() {
  return (
    <div className="Header">
      <img src={logo} className="logo" alt="logo" />
    </div>
  );
}
