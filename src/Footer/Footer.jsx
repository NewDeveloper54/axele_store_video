import React from "react";
import "./Footer.css";

import foxy from "../assets/foxy.svg";

const Footer = () => {
  return (
    <div id="footer">
      <h1>OU</h1>
      <div className="redCard">
        <div className="circle">
        <img src={foxy} height="80" width="80" alt="" />
        </div>
        <h1>Simple et rusé !</h1>
        <br />
        <br />
<br />
          <p>Rejoignez un réseau avec des centaines de centres
             partenaires engagés pour un contrôle technique fiable, rapide et accessible partout en France </p>
      </div>
    </div>
  );
};

export default Footer;
