import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </nav>
      </header>
    </>
  );
}
