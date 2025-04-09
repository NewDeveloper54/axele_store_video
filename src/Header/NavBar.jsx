import React from "react";
import "./NavBar.css";
import foxy from "../assets/foxy.svg";

import { useTheme } from "../ThemeContext";

export const Links = () => {
  
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div id="navBar">
      <div className="links">
<a href="#sectionTwo">
        <div className="link item">Démarches</div>
        </a>

        <a href="#sectionTwo">
        <div className="link item">Recherche</div>
        </a>
        <a href="#sectionTwo">
        <div className="link item">Infos</div>
        </a>
      </div>

      <div className="label">
        <label className="toggle-switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}/>
          <div className="toggle-switch-background">
            <div className="toggle-switch-handle"></div>
          </div>
        </label>
        <img src={foxy} height="70" width="70" alt="nothing yet" />
      </div>
    </div>
  );
};
