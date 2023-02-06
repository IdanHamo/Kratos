import { useState } from "react";

import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="Bar bg-headerImage">
        <div className="logo">
          <a href="#">Kratos</a>
        </div>
        <ul className="links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Anout</a>
          </li>
          <li>
            <a href="">Hsdfome</a>
          </li>
          <li>
            <a href="">sdfsd</a>
          </li>
        </ul>
        <a href="" className="action_btn">
          Get Started
        </a>
        <div className="toggle_btn" onClick={handleShowNavbar}>
          <i class={showNavbar ? `fa-solid fa-xmark` : `fa-solid fa-bars`}></i>
        </div>
      </nav>
      <div className={`dropdown_menu ${showNavbar && "open"}`}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Anout</a>
        </li>
        <li>
          <a href="">Hsdfome</a>
        </li>
        <li>
          <a href="">sdfsd</a>
        </li>
        <li>
          <a href="" className="action_btn">
            Get Started
          </a>
        </li>
      </div>
    </>
  );
}
