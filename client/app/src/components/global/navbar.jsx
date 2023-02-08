import { useState } from "react";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const links = [
    { linkName: "בית", to: "/" },
    { linkName: "עלינו", to: "/about" },
    { linkName: "יצירת קשר", to: "/contact" },
  ];
  const options = [
    { linkName: "הרשמה", to: "/registration" },
    { linkName: "התחברות", to: "/login" },
  ];

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
            {links.map((link) => {
              return (
                <li>
                  <NavLink to={link.to}>{link.linkName}</NavLink>
                </li>
              );
            })}
          </ul>
          <div>
            {options.map((option) => {
              return (
                <NavLink className="action_btn ml-5" to={option.to}>
                  {option.linkName}
                </NavLink>
              );
            })}
          </div>
          <div className="toggle_btn" onClick={handleShowNavbar}>
            <i
              class={showNavbar ? `fa-solid fa-xmark` : `fa-solid fa-bars`}
            ></i>
          </div>
        </nav>
        <div className={`dropdown_menu ${showNavbar && "open"}`}>
          {links.map((link) => {
            return (
              <li>
                <NavLink to={link.to}>{link.linkName}</NavLink>
              </li>
            );
          })}
          <li>
            {options.map((option) => {
              return (
                <NavLink className="action_btn ml-5" to={option.to}>
                  {option.linkName}
                </NavLink>
              );
            })}
          </li>
        </div>
      </div>
    </>
  );
}
