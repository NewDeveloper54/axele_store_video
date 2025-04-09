import React from "react";
import "./NavBar.css";
import foxy from "../assets/foxy.svg";

export const Links = () => {
  return (
    <div id="navBar">
      <div class="links">
<a href="#sectionTwo">
        <div class="link item">Démarches</div>
        </a>

        <a href="#sectionTwo">
        <div class="link item">Recherche</div>
        </a>
        <a href="#sectionTwo">
        <div class="link item">Infos</div>
        </a>
      </div>

      <div class="label">
        <label class="toggle-switch">
          <input type="checkbox" />
          <div class="toggle-switch-background">
            <div class="toggle-switch-handle"></div>
          </div>
        </label>
        <img src={foxy} height="70" width="70" alt="nothing yet" />
      </div>
    </div>
  );
};
