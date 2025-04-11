import React from "react";
import "./NavBar.css";
import foxy from "../assets/foxy.svg";


export const Links = () => {
  

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
        
        <img src={foxy} height="70" width="70" alt="nothing yet" />
      </div>
    </div>
  );
};
