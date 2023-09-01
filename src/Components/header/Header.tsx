import React, { useState } from "react";
import './header.css'

const Header = () => {
  const [Toggle, showMenu] = useState(false)
  return (
    <header className="header">
      <nav className="nav container" id="container">
        <a className="nav_logo">Welcome to my animated portfolio!</a>
        <div className={Toggle ? "nav_menu show-menu" :
          "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-estate nav_icon">
                </i>Start
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon">
                </i>About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-lightbulb-alt nav_icon">
                </i>Skills
              </a>
            </li> 
            <li className="nav__item">
              <a href="#work" className="nav_link">
                <i className="uil uil-image-v nav_icon">
                </i>Woks
              </a>
            </li><
              li className="nav__item">
              <a href="#journey" className="nav_link">
                <i className="uil uil-briefcase nav_icon">
                </i>Journey
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon">
                </i>Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav_toggle"
          onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;