import { useState } from "react";
import "./navBar.css";
import Button from "../button/button.js";

import React, { useContext } from "react";
import { themeContext } from "../../theme.js";

export default function NavBar() {
  const { theme } = useContext(themeContext);

  const navList = [
    { name: "Home", id: "home" },
    { name: "Works", id: "works" },
    { name: "Skills", id: "skills" },
    { name: "About Me", id: "aboutme" },
    { name: "Contact", id: "contact" },
  ];

  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className={`nav-cont ${theme}`}>
      <div className="nav-bar ">
        <ul className="nav-list">
          <div className="logo-cont"></div>
          <div className="preview">
            {navList.map((el) => (
              <li key={el.id}>
                <a
                  href={`#${el.id}`}
                  onClick={() => setActiveLink(el.id)}
                  className={`nav-link ${activeLink === el.id ? "active" : ""}`}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </div>
          <div className="header-btn">
            <button className="btn-hire">Hire Me </button>
            <Button />
          </div>
        </ul>
      </div>
    </div>
  );
}
