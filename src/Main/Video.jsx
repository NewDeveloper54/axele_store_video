// src/VideoPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Video.css";

import MCT from "../assets/logo-MCT.svg";
import foxy from "../assets/foxy.svg";
import { useEffect } from "react";

function Video() {
  const navigate = useNavigate();

  useEffect(() => {
    let section = document.querySelector("#here");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div
      id="here"
      style={{
        textAlign: "center",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="titleVideo">
        <div className="imagesParagrapheVideo">
          <div className="imagesOnlyVideo">
            <img
              src={MCT}
              alt="Logo Moncontroletechnique.fr"
              width="350"
              height="52"
              className="mct"
            />
            <img
              src={foxy}
              alt="Foxy"
              width="126"
              height="100"
              className="foxy"
            />
          </div>

          <div className="pOnlyVideo">
            <p className="foxyPara">Sécurité et Environnement</p>
          </div>
        </div>
      </div>

      <div className="sectionTwoVideo">
        <button
          className="btn"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "20px", marginTop: "100px" }}
        >
          Retour
        </button>
        <iframe
          src="https://drive.google.com/file/d/1Gdr4Pa23abTOkLfGYKr0ramTRi6Dhxor/preview"
          width="1000"
          height="700"
          allow="autoplay"
          title="Vidéo"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
