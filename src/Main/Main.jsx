import React from "react";
import "./Main.css";

import { Link } from "react-router-dom";


import icone from "../assets/iconee.png";



import { useTheme } from "../ThemeContext";

import rendezVousImg from "../assets/rdv.png";
import contactImg from "../assets/contact-us.png";
import foxy from "../assets/foxy.svg";
import MCT from "../assets/logo-MCT.svg";
import rechercheImg from "../assets/symbole-de-linterface-de-recherche.png";
import info from "../assets/information.png";
import partenaire from "../assets/traiter.png";
import gerer from "../assets/gerer.png";
import annuler from "../assets/annule.png";
import video from "../assets/video.mov";
import play from "../assets/joue.png";

const Main = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? "mBlack" : "m"} id="main">
      <section id="sectionOne" className="sectionOne">
        <div className="title">
          
            <div className="imagesParagraphe">
              <div className="imagesOnly">
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

              <div className="pOnly">
              <p className="foxyPara">Sécurité et Environnement</p>
              </div>

            </div>
        </div>
      </section>

      <section id="sectionTwo" className="sectionTwo">
        <h1>Toutes vos démarches en un clic :</h1>
        <div className="cards">
            <a
              href="https://www.moncontroletechnique.fr/centre/controle-technique-maxeville"
            >
              <div className="items one">
                <h2 className="rdv">Prendre rendez-vous</h2>
                
              </div>
            </a>

            <a
              href="https://www.moncontroletechnique.fr/annulation_rdv"
            >
              <div className="items two">
                <h2 className="infos">Modifer / Supprimer un RDV</h2>
                
              </div>
              
            </a>






          <Link to="/video">
  <div className="items three">
    <img 
    height="75" width="75"
    className="play" src={play} alt="" />
    
    
  </div>
  </Link> 




            
        </div>
      </section>
    </div>
  );
};

export default Main;
