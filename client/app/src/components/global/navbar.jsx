import { useState } from "react";

import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar bg-headerImage">
      <div className="container">
        <div className="logo">Logo</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon></MenuIcon>
        </div>
        <div className={`nav-elements  ${showNavbar && "activeNav"}`}>
          <ul className="navList">
            <li className="navLink">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
