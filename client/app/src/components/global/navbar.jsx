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
      <div className="container">
        <nav className="Bar">
          <div className="logo">
            <NavLink to="/" className="text-white">
              קראטוס
            </NavLink>
          </div>
          <ul className="links">
            <li>
              <NavLink to="/">בית</NavLink>
            </li>
            <li>
              <NavLink to="/about">עלינו</NavLink>
            </li>
            <li>
              <NavLink to="/contact">יצירת קשר</NavLink>
            </li>
          </ul>
          <div>
            <NavLink className="action_btn ml-5" to="/register">
              הרשמה
            </NavLink>
            <NavLink className="action_btn" to="/login">
              התחברות
            </NavLink>
          </div>
          <div className="toggle_btn" onClick={handleShowNavbar}>
            <i
              class={showNavbar ? `fa-solid fa-xmark` : `fa-solid fa-bars`}
            ></i>
          </div>
        </nav>
        <div className={`dropdown_menu ${showNavbar && "open"}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">Anout</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Hsdfome</NavLink>
          </li>

          <li>
            <NavLink className="action_btn" to="/register">
              Signup
            </NavLink>
            <NavLink className="action_btn" to="/login">
              Login
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
}
