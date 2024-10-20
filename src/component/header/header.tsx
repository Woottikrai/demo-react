import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <li>
            {/* <a href="#home">Home</a> */}
            <Link to="/">Home</Link>
          </li>

          <li>
            {/* <a href="#about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <a href="#contact">Contact</a> */}
            <Link to="/contact">Contact</Link>
          </li>
        </nav>
      </header>
    </>
  );
}
